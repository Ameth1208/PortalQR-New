const { join } = require("path");
const { createReadStream, existsSync, readdirSync } = require("fs");
const { bgYellow, cyan, yellow } = require("kleur");
const polka = require("polka");

const HTTP_PORT = process.env.PORT || 3000;
const QR_FILE = process.env.QR_FILE ?? "bot";
const PUBLIC_URL =
  process.env.PUBLIC_URL ??
  process.env.RAILWAY_STATIC_URL ??
  "http://localhost";

const dir = [join(__dirname, "dist"), join(__dirname, "..", "dist")].find((i) =>
  existsSync(i)
);
const serve = require("serve-static")(dir);

const findQrFile = (dir) => {
  try {
    const files = readdirSync(dir);
    return files.find((file) => /\.qr\.png$/.test(file));
  } catch (e) {
    return null;
  }
};

/**
 * Iniciamos Portal WEB para escanear QR
 * @param {port:3000, publicSite:'http://mistio.com', qrFile:'qr.png', dir:__dirname}
 */
const start = (args) => {
  const injectArgs = {
    port: HTTP_PORT,
    publicSite: PUBLIC_URL,
    name: QR_FILE,
    ...args,
  };
  const { port, publicSite } = injectArgs;

  const banner = () => {
    console.log(``);
    console.log(bgYellow(`🚩 ESCANEAR QR 🚩`));
    console.log(cyan(`Existen varias maneras de escanear el QR code`));
    console.log(
      cyan(`- Tambien puedes visitar `),
      yellow(`${publicSite}:${port}`)
    );
    console.log(
      cyan(`- Se ha creado un archivo que finaliza `),
      yellow("qr.png")
    );
    console.log(``);
  };

  polka()
    .use(serve)
    .get("qr.png", (_, res) => {
      //Modificancion 2
      const directories = [process.cwd(), join(__dirname, ".."), __dirname];

      let qrSource;

      for (let dir of directories) {
        const qrFile = findQrFile(dir);
        if (qrFile) {
          qrSource = join(dir, qrFile);
          break;
        }
      }

      if (!qrSource) {
        const qrMark = [
          join(__dirname, "dist", "water-mark.png"),
          join(__dirname, "..", "dist", "water-mark.png"),
        ].find((i) => existsSync(i));

        qrSource = qrMark;
      }

      const fileStream = createReadStream(qrSource);

      res.writeHead(200, { "Content-Type": "image/png" });
      fileStream.pipe(res);
    })
    .listen(port, () => banner());
};

module.exports = start;

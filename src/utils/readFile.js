import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

export const parseFile = (filePath) => {
  return new Promise((resolve, reject) => {
    fs.readFile(
      path.resolve(path.dirname(fileURLToPath(import.meta.url)), filePath),
      "utf8",
      (error, data) => {
        if (error) {
          reject(error);
          return;
        }
        resolve(JSON.parse(data));
      }
    );
  });
};

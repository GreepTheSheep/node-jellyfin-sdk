const fs = require('fs');
const crypto = require("crypto");

bootstrap();

function bootstrap() {
    let uuid = generateUUID();
    fs.writeFileSync("./uuid", uuid, "utf-8");
    console.log("Generated UUID for Jellyfin Device ID:", uuid);
}

function generateUUID() {
    // Generate 16 random bytes
    const bytes = crypto.randomBytes(16);
    // Adjust certain bits according to RFC 4122 section 4.4 as follows:
    // Set the version to 4 (random) by adjusting the 13th byte
    bytes[6] = (bytes[6] & 0x0f) | 0x40; // Version 4 UUIDs have the form 4xxx (where x is any hexadecimal digit)
    // Set the variant to 10xx (DCE 1.1) by adjusting the 17th byte
    bytes[8] = (bytes[8] & 0x3f) | 0x80; // Variant specified in 10xx for DCE 1.1

    // Convert the adjusted bytes to a hexadecimal string and insert dashes
    const uuid = `${bytes.toString('hex').slice(0, 8)}-${bytes.toString('hex').slice(8, 12)}-${bytes.toString('hex').slice(12, 16)}-${bytes.toString('hex').slice(16, 20)}-${bytes.toString('hex').slice(20)}`;
    return uuid;
}
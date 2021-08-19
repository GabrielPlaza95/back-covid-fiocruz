import AdmZip from "adm-zip"


export function zipFiles(directoryPath) {
    const zip = new AdmZip()
    zip.addLocalFolder(directoryPath)
    return zip.toBuffer()
}
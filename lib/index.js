const fs = require('fs')
const path = require('path')
const marked = require('marked')
const puppeteer = require("puppeteer")
const cosmiconfigSync = require('cosmiconfig')
/**
 * 
 * @param {string} input 输入文件的路径（相对或者绝对） 
 * @param {*} param1 
 */
module.exports = async (input, {output , width}) => {
  if (typeof input !== 'string') {
    throw new TypeError(`Expected a string, got ${typeof input}`)
  }//判断文件路径是否正确
  
  //1.读取input 文件的内容
  // process.cwd() 输出相对路径 为命令行所在位置 相当于当前命令行输入pwd
  const filename = path.resolve(process.cwd(),input)//获取绝对路径

  if (!fs.existsSync(filename)) {
    throw new Error("文件路径不存在")
  }
  const stat = fs.statSync(filename)
  if(stat.isDirectory()){
    throw new Error("给定一个文件而不是一个文件件")
  }
  const contents = fs.readFileSync(input,'utf-8')

  
  //2.使用marked 将 markdown 转换为html
  const fregment  = marked(contents)
  const html = `<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Document</title>
      <link rel="stylesheet" href="https://unpkg.com/markdown-css">
      
  </head>
  <body class = "markdown-body">
      ${fregment}
  </body>
  </html>`
  // 3.html ->图片
  const browser = await puppeteer.launch()
  const page = await browser.newPage()
  await page.setViewport({width:width?width:1000,height:100})
  await page.setContent(html)
  await page.screenshot({path:output,fullPage:true})

  await browser.close()


}

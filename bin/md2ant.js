#!/usr/bin/env node
// 如果你需要这个文件是cli执行时的入口， 就必须通过项目的package.json 中的bin字段声明


const program = require('commander')
const pkg = require('../package')
const md2Ant = require('..')//上级目录 package 里的main 里面有个js文件
const inquirer = require('inquirer')



program
  .version(pkg.version)
  .usage('<input>')
  .option('-o, --output <output>', '输出文件路径')
  .option('-q,--width','输出图片宽度')
  // .on('--help', console.log)
  .parse(process.argv)
  .args.length || program.help()
inquirer.prompt([
  {type:'number',name:'width',message:'input width'}
]).then(answers=>{
  const { args, output , width} = program
  const [ input ] = args
  // console.log(`program`, program);
  // TODO: Implement module cli
  console.log(md2Ant(input, { output , width:~answers.width }))
})


#!/usr/bin/env node
const program = require('commander');

program
  .version('0.0.1')
  .description('cleancalc terminal');

program
  .command('add <num1> <num2>')
  .alias('a')
  .description('Add numbers')
  .action(function(num1, num2){controller.add(num1, num2)});

program
  .command('subtract <num1> <num2>')
  .alias('s')
  .description('subtract numbers')
  .action(function(num1, num2){controller.subtract(num1, num2)});

program
  .command('multiply <num1> <num2>')
  .alias('m')
  .description('multiply numbers')
  .action(function(num1, num2){controller.multiply(num1, num2)});

program
  .command('divide <num1> <num2>')
  .alias('d')
  .description('divide numbers')
  .action(function(num1, num2){controller.divide(num1, num2)});


    
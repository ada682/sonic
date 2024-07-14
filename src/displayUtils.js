require('colors');

function displayHeader() {
  process.stdout.write('\x1Bc');
  console.log(`
  ____              _              ____               _     
 / ___| ___  _ __  | |_  ___  _ __| ___ \\  ___  _ __ __| |___ 
| |    / _ \\| '_ \\ | __|/ _ \\| '__|   \\ \\ / _ \\| '__/ _\` / __|
| |___| (_) | | | || |_|  __/| |  | |  | |  __/| | | (_| \\__ \\
 \\____|\\___/|_| |_| \\__|\\___||_|  |_|  |_|\\___||_|  \\__,_|___/
                                                              
`.cyan);
  console.log('========================================'.cyan);
  console.log('=            POKEMON BOT               ='.cyan);
  console.log('=           Created by DELUGA          ='.cyan);
  console.log('=       https://t.me/slyntherinnn      ='.cyan);
  console.log('========================================'.cyan);
  console.log();
}

module.exports = {
  displayHeader,
};

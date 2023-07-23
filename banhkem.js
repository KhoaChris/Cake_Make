const readline = require("readline");
// const { domainToUnicode } = require("url");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
function wait(second) {
  let waitPromise = new Promise((resolver, rejector) => {
    setTimeout(() => {
      resolver();
    }, second * 1000);
  });
  return waitPromise;
}

async function nameCake() {
  let nameCake;
  console.log("Nhập tên chủ nhân chiếc bánh:");
  nameCake=await new Promise((resolve, reject) => {
    rl.on("line", (input) => {
      nameCake = parseInt(input);
      resolve(input);
      // rl.close();
    });
  });
}
async function age() {
  let age;
  console.log("Nhập tuổi người ấy:");
  age=await new Promise((resolve, reject) => {
    rl.on("line", (input) => {
      age = parseInt(input);
      resolve( parseInt);
      // rl.close();
    });
  });
}
async function sizeCake(sizeExpect) {
  let size;
  return new Promise(async (resolve, reject) => {
    console.log("Bạn muốn làm size gì nè :3 Nhập đi nào:");
    await new Promise((resolve, reject) => {
      rl.on("line", (input) => {
        size = parseInt(input);
        resolve(parseInt);
        // rl.close();
      });
    });
    let sizeS = "169000";
    let sizeM = "233000";
    let sizeL = "510000";
    if (sizeExpect >= sizeL ) {
      resolve("Okee tiền đã đủ để triển size L ^^");
    }
    else if (sizeExpect >= sizeM) {
      resolve("Okee tiền đã đủ để triển size M ^^");
    } else if (sizeExpect >= sizeS) {
      resolve("Okee tiền đã đủ để triển size S ^^");
    } else {
      reject("Hic tiền đâu đủ để làm cái nào đâu :(((");
    }
  });
}
async function getMoney(moneyExpect) {
  let moneyGet;
  return new Promise(async (resolve, reject) => {
    console.log("Lấy tiền mẹ thôi!!!!");
    await new Promise((resolve, reject) => {
      rl.on("line", (input) => {
        moneyGet = parseInt(input);
        resolve(moneyGet);
        // rl.close();
      });
    });
    resolve(moneyGet);
    // if (moneyGet >= moneyExpect) {
    //   resolve("Ok đủ tiền đi");
    // } else {
    //   reject("Mẹ cho hỏng đủ tiền");
    // }
  });
}
async function goBuyRawMaterials() {
  console.log("Bắt đầu đi mua nguyên liệu chế biến nào !!!");
  await wait(4);
  console.log("Bắt đầu tung tăng về nhà thôi");
  await wait(2);
  console.log("Về đến nhà rồi nè!!!!!!!!!!");
}
async function cooking() {
  async function prepare() {
    return new Promise(async (res, rej) => {
      console.log("Sơ chế nguyên liệu\n==================");
      console.log("\n1.Tách Trứng");
      console.log("2.Ray bột");
      console.log("3.Chuẩn bị gia vị");
      await wait(5);
      console.log("Sơ chế hoàn thành");
      res();
    });
  }
  async function makeCakeDough() {
    return new Promise(async (resolve, reject) => {
      console.log("Nhàu bột làm bánh, Đánh bông kem");
      await wait(10);
      console.log("đã OK");
      resolve();
    });
  }
  async function incubate() {
    return new Promise(async (resolve, reject) => {
      console.log("Ủ bột");
      await wait(10);
      console.log("Okayyy rồi đấy :))) ");
      resolve();
    });
  }
  async function moldForCake() {
    return new Promise(async (resolve, reject) => {
      console.log("Tạo khuôn cho bánh");
      await wait(10);
      console.log("Sắp vô form rùiii");
      resolve();
    });
  }
  async function bakeCake() {
    return new Promise(async (resolve, reject) => {
      console.log("Nướng Bánhhhhh");
      await wait(10);
      console.log("đã OKkkkk nhé!!!!");
      resolve();
    });
  }
  async function shapeTheCreamOntoTheCake() {
    return new Promise(async (resolve, reject) => {
      console.log("Phết kem lên bánh đã tạo hình");
      await wait(10);
      console.log("Đã thêm kem lên bánh !!! Nhìn ra gì phết");
      resolve();
    });
  }
  async function decorate() {
    return new Promise(async (resolve, reject) => {
      console.log("Trang trí và viết tên người nhận");
      await wait(10);
      console.log("OKkkkk luôn nhé!!!!");
      resolve();
    });
  }
  await prepare();
  await Promise.all([
    makeCakeDough(),
    incubate(),
    moldForCake(),
    bakeCake(),
    shapeTheCreamOntoTheCake(),
    decorate(),
  ]);
}
async function quat() {
  await wait(1);
  console.log("Đợi chờ gì nữa, xơiiiiiiiii");
}
let main = async function () {
  let input01 = await nameCake();
  let input02 = await age();

  await getMoney()
    .then(async (value) => {
       await sizeCake(value);
      console.log(value);
      await goBuyRawMaterials();
      await cooking();
      await quat();
    })
    .catch((value) => {
      console.log(value);
      console.log("Haizzz hong cho đủ tiền, tưởng cắn được miếng đi chơi net :(((");
    });
};

main();

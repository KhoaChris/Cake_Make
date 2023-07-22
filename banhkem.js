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
    }, second);
  });
  return waitPromise;
}

async function nameCake() {
  let nameCake;
  console.log("Nhập tên chủ nhân chiếc bánh:");
  await new Promise((resolve, reject) => {
    rl.on("line", (input) => {
      nameCake = parseInt(input);
      console.log("Tên đẹp quá :3333\n");
      resolve();
      rl.close();
    });
  });
}
async function age() {
  let age;
  console.log("Nhập tuổi của người ấy:");
  await new Promise((resolve, reject) => {
    rl.on("line", (input) => {
      age = parseInt(input);
      resolve();
      rl.close();
    });
  });
}
async function size(sizeExpect) {
  let size;
  return new Promise(async (resolve, reject) => {
    console.log("tiep size luon ban oi");
    await new Promise((resolve, reject) => {
      rl.on("line", (input) => {
        size = parseInt(input);
        resolve();
        rl.close();
      });
    });
    let sizeS = "169000";
    let sizeM = "233000";
    let sizeL = "510000";
    if (sizeS >= moneyExpect) {
      resolve("Ok đủ tiền mua size S ^^");
    } else {
      reject("Mẹ cho hỏng đủ tiền");
    }
    if (sizeM >= moneyExpect) {
      resolve("Ok đủ tiền mua size M ^^");
    } else {
      reject("Mẹ cho hỏng đủ tiền");
    }
    if (sizeL >= moneyExpect) {
      resolve("Ok đủ tiền mua size M ^^");
    } else {
      reject("Mẹ cho hỏng đủ tiền");
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
        resolve();
        rl.close();
      });
    });
    if (moneyGet >= moneyExpect) {
      resolve("Ok đủ tiền đi");
    } else {
      reject("Mẹ cho hỏng đủ tiền");
    }
  });
}
async function goBuyRawMaterials() {
  console.log("Bat dau di mua");
  await wait(4);
  console.log("Bắt đầu về");
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
      console.log("sơ chế hoàn thành");
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
      console.log("đã OK luôn");
      resolve();
    });
  }
  async function moldForCake() {
    return new Promise(async (resolve, reject) => {
      console.log("Tạo khuôn cho bánh");
      await wait(10);
      console.log("đã OKkkkk");
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
      console.log("đã OKkkkk luôn nhé!!!!");
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
  console.log("Quất!!!!!!!!!!!!!!!!!!!!!");
}
let main = async function () {
  await nameCake();
  wait(500);  
  await age();
  let expectMoney = await size();
  await getMoney(expectMoney)
    .then(async (value) => {
      console.log(value);
      await goBuyRawMaterials();
      await cooking();
      await quat();
    })
    .catch((value) => {
      console.log(value);
      console.log("Thôi ở nhà nhịn đói");
    });
};

main();

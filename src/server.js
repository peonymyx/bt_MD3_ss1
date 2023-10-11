var fs = require("fs");
var http = require('http');
const path = require("path");
const url = require('url');

//Exercise 01

const server01 = http.createServer((res, rep) => {
    //Sử dụng hàm readFileSync để đọc file read-this.txt và log toàn bộ kết quả ra màn hình console
    const read_this = fs.readFileSync(path.join(__dirname, './stater/exercise01/read-this.txt'), 'utf-8');
    console.log(read_this, "Exercise 1.1");

    //Sử dụng hàm readFileSync để đọc file input.txt, file append.txt và log toàn bộ kết quả ra màn hình console
    const input_text = fs.readFileSync(path.join(__dirname, './stater/exercise01/input.txt'), 'utf-8');
    const appent_text = fs.readFileSync(path.join(__dirname, "./stater/exercise01/append.txt"), "utf-8");
    console.log(input_text, " And ", appent_text, "Exercise 1.2");


    //Sử dụng hàm writeFileSync để nối kết quả của 2 file trên với nhau và ghi dữ liệu vào file final.txt
    const data = input_text + appent_text;

    const write_final = fs.writeFileSync(path.join(__dirname, "./stater/exercise01/final_text.txt"), data, function (err, data) {
        if (err) throw err;
        console.log('write file successfully');
    })
    const final_text = fs.readFileSync(path.join(__dirname, "./stater/exercise01/final_text.txt"), "utf-8")
    console.log(final_text, "excercise 1.3");

    res.end;
}).listen(3100, () => { console.log("Server 01 is running"); })


//exercise 02
const server02 = http.createServer((res, rep) => {
    //Sử dụng hàm readFileSync để đọc file read-this.txt và log toàn bộ kết quả ra màn hình console
    const read_this = fs.readFile(path.join(__dirname, './stater/exercise01/read-this.txt'), 'utf-8', (err, data) => {
        console.log(data, "Exercise 2.1");
    });


    //Sử dụng hàm readFileSync để đọc file input.txt, file append.txt và log toàn bộ kết quả ra màn hình console
    const input_text = fs.readFile(path.join(__dirname, "./stater/exercise01/input.txt"), "utf-8" , (err, data) =>{
        console.log(data, "Exercise 2.2.1");
    })
    const appent_text = fs.readFile(path.join(__dirname, "./stater/exercise01/append.txt"), "utf-8" , (err, data) =>{
        console.log(data, "Exercise 2.2.1");
    })


    //Sử dụng hàm writeFileSync để nối kết quả của 2 file trên với nhau và ghi dữ liệu vào file final.txt
    const final_text = fs.readFile(path.join(__dirname, "./stater/exercise01/final_text.txt"), "utf-8", (err, data) =>{
        console.log(data, "Exercise 2.3");
    })
    res.end
}).listen(2500, () => { console.log("Server 02 is running"); })




//Exercise 4
/* Khởi tạo một web server gửi về cho người dùng thông tin của toàn bộ file final.txt tại localhost, cổng 3000
Khởi tạo một Node.js project tại chính thư mục starter (npm init), cài đặt package nodemon → bên trong file package.json phần script, sửa lại property start với value “nodemon server.js”
Chạy lại file server với dòng lệnh npm run start và xem kết quả */
const server04 = http.createServer((req,res)=>{
    fs.readFile(path.join(__dirname,'./stater/exercise01/final_text.txt'),'utf-8',(err,data)=>{
        if(err){
            console.log(err);
        }else{
            res.writeHead(200,{'Content-Type':'text/html'})
            res.write(data)
        }
        return res.end()
    })
}).listen(3000,()=>{console.log('Server 04 is running')});


const server05 = http.createServer((req, res) =>{

    let url = req.url;
    let homePage = fs.readFileSync(path.join(__dirname, "./stater/exercise05/homepage.html"));
    let overview = fs.readFileSync(path.join(__dirname, "./stater/exercise05/overview.html"));
    let products = fs.readFileSync(path.join(__dirname, "./stater/exercise05/products.html"));
    res.setHeader("Content-Type", "text/html");
    if(url == "/")
        res.write(homePage);
    else if(url =="/overview")
        res.write(overview);
    else if(url == "/products")
        res.write(products)
    else res.write("PAGE NOT FOUND")
}).listen(5000, () =>{
    console.log("Server 05 is running");
})
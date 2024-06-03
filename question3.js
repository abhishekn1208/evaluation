const files = [
    "document1.pdf",
    "document2.pdf",
    "image1.png",
    "text1.txt",
    "photo1.jpg",
    "program1.exe",
    "data1.csv",
    "report1.pdf"
  ];

  let countFileExtensions=()=>{
  let count={};
  files.forEach((ele)=>{
    let ext = ele.split('.').pop();

   return count[ext]
  })
  }
  console.log(countFileExtensions(files) )
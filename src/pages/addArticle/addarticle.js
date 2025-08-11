import Mynavbar from "../../components/navbar/navbar";
import '../addArticle/addarticle.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from "axios";
import { useState } from "react";
import  Swal  from "sweetalert2";




function Addarticle() {
const [formData, setFormData] = useState({
  category: "",
  desc: "",
  wrriter: "",
  image: "",
  readingTime: ""
});

const resetFormData = () => {
  setFormData({
      category: "",
  desc: "",
  wrriter: "",
  image: "",
  readingTime: ""
  })
}
  const formHandler = (e , propertyName) =>{

    setFormData({...formData , [propertyName] : e.target.value})
  }

const addArticleHandler = () => {
  // بررسی پر بودن همه فیلدها
  const isEmptyField = Object.values(formData).some(value => !value?.trim());
  
  if (isEmptyField) {
    Swal.fire({
      icon: "error",
      title: "خطا",
      text: "لطفاً همه فیلدها را پر کنید.",
    });
    return; // ادامه نده
  }

  axios.post("http://localhost:4001/articles", formData)
    .then(response => {
      if (response.status === 201) {
        Swal.fire({
          icon: "success",
          title: "مقاله جدید با موفقیت ساخته شد.",
          timer: 1500,
          timerProgressBar: true,
          showConfirmButton: false
        });
        resetFormData()
      }
  
    })
    .catch(error => {
      Swal.fire({
        icon: "error",
        title: "خطا",
        text: "مشکلی در ثبت مقاله پیش آمد."
      });
      console.log(error);
    });

    
};



 
 

  return(
<>
<Mynavbar/>
<div className="formcontainer yekan">
 <Form.Label htmlFor="inputPassword5">عنوان مقاله</Form.Label>
      <Form.Control
      value ={formData.category}
      onChange={(e) => formHandler(e , "category")} 
        type="text"
        id="inputPassword5"
        aria-describedby="passwordHelpBlock"
        placeholder="عنوان مقاله را وارد کنید"
      />
 <Form.Label htmlFor="inputPassword5">توضیح کوتاه </Form.Label>
      <Form.Control
      value ={formData.desc}
      onChange={(e) => formHandler(e , "desc")} 
        type="text"
        id="inputPassword5"
        aria-describedby="passwordHelpBlock"
        placeholder="  یک توضیح کوتاه درمورد مقاله بنویسید  "
      />
 <Form.Label htmlFor="inputPassword5"> نویسنده مقاله</Form.Label>
      <Form.Control
      value ={formData.wrriter}
      onChange={(e) => formHandler(e , "wrriter")} 
        type="text"
        id="inputPassword5"
        aria-describedby="passwordHelpBlock"
        placeholder=" نام نویسنده مقاله   "
      />
 <Form.Label htmlFor="inputPassword5">عکس مقاله</Form.Label>
      <Form.Control
      value ={formData.image}
      onChange={(e) => formHandler(e , "image")} 
        type="text"
        id="inputPassword5"
        aria-describedby="passwordHelpBlock"
        placeholder="عکس مقاله را وارد کنید"
      />

 <Form.Label htmlFor="inputPassword5"> مدت زمان خواندن</Form.Label>
     
    <Form.Control onChange={(e) => formHandler(e , "readingTime")}
    value ={formData.readingTime} 
       type="number" min={1} max={120} step={1} />
          <Button onClick={addArticleHandler} style={{marginTop:"20px"}} variant="primary" type="button">
        ساخت مقاله
      </Button>
      </div>

</>
  )
};

export default Addarticle;
import { useState ,  useEffect} from 'react';
import '../editArticle/editArticle.css';
import { useParams } from 'react-router-dom';
import axios from "axios";
import { Button } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import Mynavbar from '../../components/navbar/navbar';
import Swal from 'sweetalert2';


function EditArticle() {

  const [articleData , setArticleData] = useState({
     category: "",
  desc: "",
  wrriter: "",
  image: "",
  readingTime: ""
  })
const articleId = useParams().articleId;


 useEffect(()=> {
    axios.get(`http://localhost:4001/articles/${articleId}`)
    .then(response => setArticleData(response.data))
  }, [])

  const ediArticleHandler = () =>{
    axios.put(`http://localhost:4001/articles/${articleId}` , articleData)
    Swal.fire({
      title: 'مقاله با موفقیت ویرایش شد',
      timer : '1500',
      timerProgressBar : true,
      showConfirmButton : false
    })
  }

  const formHandler = (e) =>{
  setArticleData({...articleData, [e.target.name]: e.target.value})
  }
  
  return(
<>
<Mynavbar/>
<div className="formcontainer yekan">
 <Form.Label htmlFor="inputPassword5">عنوان مقاله</Form.Label>
      <Form.Control
      name="category"
      value ={articleData.category}
      onChange={formHandler} 
        type="text"
        id="inputPassword5"
        aria-describedby="passwordHelpBlock"
        placeholder="عنوان مقاله را وارد کنید"
      />
 <Form.Label htmlFor="inputPassword5">توضیح کوتاه </Form.Label>
      <Form.Control
      name="desc"
      value ={articleData.desc}
      onChange={formHandler} 
        type="text"
        id="inputPassword5"
        aria-describedby="passwordHelpBlock"
        placeholder="  یک توضیح کوتاه درمورد مقاله بنویسید  "
      />
 <Form.Label htmlFor="inputPassword5"> نویسنده مقاله</Form.Label>
      <Form.Control
      name="wrriter"
      value ={articleData.wrriter}
      onChange={formHandler} 
        type="text"
        id="inputPassword5"
        aria-describedby="passwordHelpBlock"
        placeholder=" نام نویسنده مقاله   "
      />
 <Form.Label htmlFor="inputPassword5">عکس مقاله</Form.Label>
      <Form.Control
      name="image"
      value ={articleData.image}
      onChange={formHandler} 
        type="text"
        id="inputPassword5"
        aria-describedby="passwordHelpBlock"
        placeholder="عکس مقاله را وارد کنید"
      />

 <Form.Label htmlFor="inputPassword5"> مدت زمان خواندن</Form.Label>
     
    <Form.Control onChange={formHandler}
    name="readingTime"
    value ={articleData.readingTime} 
       type="number" min={1} max={120} step={1} />
          <Button onClick={ediArticleHandler} style={{marginTop:"20px"}} variant="primary" type="button">
        ویراش مقاله
      </Button>
      </div>
</>
  )
};

export default EditArticle;
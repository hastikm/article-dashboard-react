import { IoTimeSharp } from "react-icons/io5";
import Card from 'react-bootstrap/Card';
import { FaLongArrowAltLeft } from "react-icons/fa";
import '../articleItem/articleItem.css'
import { Link } from "react-router-dom";

function ArticleItem(props) {
  return(
<>
   <Card className="Card" >
      <Card.Img variant="top" src={props.image} />
      <Card.Body>
        <Card.Title className="py-2">{props.category}</Card.Title>
        <Card.Text>
           {props.desc}
        </Card.Text>

      <Link to={`/article/${props.id}`}>
        <span className="read-more">
          <span>ادامه مقاله <FaLongArrowAltLeft size={'25px'}/></span>
        </span></Link>
      </Card.Body>
      <Card.Footer className="d-flex justify-content-between align-item-center py-3">
      <span>نویسنده: {props.wrriter}  </span>
       <span><IoTimeSharp /> {props.readingTime}دقیقه</span>

      
      </Card.Footer>

    </Card>

</>

  )
};
export default ArticleItem
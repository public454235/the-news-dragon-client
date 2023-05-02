import { Button, Card } from "react-bootstrap";
import { Link, useLoaderData } from "react-router-dom";
import { HiOutlineArrowLeft } from "react-icons/hi";
import EditorsInsights from "../EditorsInsights/EditorsInsights";


const News = () => {
    const news = useLoaderData();
    const { _id, title, details, image_url, category_id } = news
    return (
        <div>
            <h4>Dragon News</h4>
            <Card>
                <Card.Img variant="top" src={image_url} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {details}
                    </Card.Text>
                    <Link to={`/category/${category_id}`}><Button variant="danger"> <HiOutlineArrowLeft></HiOutlineArrowLeft> news in this category</Button></Link>
                </Card.Body>
            </Card>
            <EditorsInsights></EditorsInsights>
        </div>

    );
};

export default News;
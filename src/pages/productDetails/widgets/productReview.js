import { Avatar, Button, Col, Modal, Rate, Row, Space } from "antd";
import TextArea from "antd/es/input/TextArea";
import { useState } from "react";
import { AiFillEdit } from "react-icons/ai";
import { FaStar } from "react-icons/fa";
import { FiStar } from "react-icons/fi";

const ProductReviewSection = () => {
  const [isReviewBoxOpened, setIsReviewBoxOpende] = useState(false);
  var reviews = [
    {
      name: "Nitish Kumar",
      dateTime: "02-March-2023 12:00PM",
      description:
        "I bought a product here that was excellent, and I feel very happy with their service. The quality of the product exceeded my expectations, and I was particularly impressed with how quickly it was delivered. The packaging was secure, and everything was in perfect condition upon arrival. I would definitely consider purchasing again in the future.",
      rating: "4.5",
    },
    {
      name: "Aarav Patel",
      dateTime: "05-March-2023 02:30PM",
      description:
        "Great product quality! Delivered on time and exceeded my expectations. The product itself is very well made, and it worked exactly as described. The online shopping experience was seamless, and the checkout process was very simple. Customer service was responsive and helpful when I had a quick question regarding the product features.",
      rating: "5.0",
    },
    {
      name: "Sanya Mehta",
      dateTime: "10-March-2023 03:00PM",
      description:
        "The product was okay, but customer support could have been better. While the item itself was decent and worked as expected, I ran into some issues when trying to contact customer service about a small issue with the product. The response time was slow, and it took longer than I anticipated to get a resolution. I hope they improve in this area for future customers.",
      rating: "3.5",
    },
    {
      name: "Rajesh Sharma",
      dateTime: "12-March-2023 10:15AM",
      description:
        "Fast delivery and product works perfectly. Highly recommended! I was pleasantly surprised by how quickly my order arrived – it came a day earlier than expected. The product was exactly as described, and it worked without any issues. The overall experience was fantastic, and I will definitely be recommending this website to friends and family.",
      rating: "4.8",
    },
    {
      name: "Preeti Gupta",
      dateTime: "15-March-2023 11:45AM",
      description:
        "The product was not as expected. Returning it was a hassle. The product was advertised as being of high quality, but upon receiving it, I found that it didn’t meet my expectations. The color was different, and the material felt cheap. Returning it was also a frustrating experience, as I had to wait for a long time to get the return instructions, and the process was far from straightforward.",
      rating: "2.0",
    },
    {
      name: "Vikram Singh",
      dateTime: "18-March-2023 05:20PM",
      description:
        "Amazing service! The product was delivered quickly and is of great quality. The customer support was excellent as well, answering all my queries before the purchase. I felt very confident about my purchase, and the product turned out to be exactly what I was looking for. I will certainly be coming back to this store for future purchases.",
      rating: "5.0",
    },
    {
      name: "Anjali Desai",
      dateTime: "20-March-2023 01:00PM",
      description:
        "The quality is decent, but the delivery took longer than expected. The product itself was fine, but it wasn’t as great as I had hoped it would be. Additionally, it took several days longer than estimated to arrive. I would give this store another chance, but I hope their delivery service improves so that customers aren’t left waiting unnecessarily.",
      rating: "3.0",
    },
    {
      name: "Mohit Verma",
      dateTime: "22-March-2023 09:10AM",
      description:
        "The product arrived in perfect condition and was easy to use. The packaging was very secure, and the product was exactly as described on the website. I am particularly pleased with the customer support team who answered all my questions in a timely manner. It was easy to track my order, and I had no issues with the entire shopping experience.",
      rating: "4.7",
    },
    {
      name: "Rina Kapoor",
      dateTime: "25-March-2023 07:30PM",
      description:
        "Terrible customer service! Had issues with the product and couldn’t get support. I received a faulty product and tried to reach customer service multiple times, but their response was either delayed or not helpful. I am really disappointed with how the issue was handled and the fact that I still haven’t received a resolution. I won’t be shopping here again unless they improve their support system.",
      rating: "1.0",
    },
    {
      name: "Kunal Joshi",
      dateTime: "28-March-2023 04:15PM",
      description:
        "Really impressed with the overall experience. The product was high quality, and the delivery was faster than expected. I was also happy with the customer support that answered my pre-purchase questions. Everything was as described, and I couldn’t be happier with my purchase. It’s rare to get this level of service online, so I highly recommend this store to anyone.",
      rating: "5.0",
    },
    {
      name: "Ravi Kumar",
      dateTime: "30-March-2023 11:00AM",
      description:
        "Good quality but slightly overpriced compared to other options. The product I purchased was good, but I noticed that it was priced higher than similar products on other websites. While the quality was fine, I feel like I could have found a better deal elsewhere. However, the overall experience was positive, and I did not face any issues with the website or delivery.",
      rating: "3.8",
    },
    {
      name: "Sakshi Singh",
      dateTime: "03-April-2023 12:10PM",
      description:
        "Product was not as described, and the quality was disappointing. I received a different item from what I ordered, and the quality was much lower than what was advertised. The return process was also a bit of a headache, and it took much longer than I expected. Not a great experience overall, and I wouldn’t recommend buying from here again.",
      rating: "2.5",
    },
    {
      name: "Nikhil Sharma",
      dateTime: "05-April-2023 02:00PM",
      description:
        "Fantastic product and a great shopping experience. Would recommend to everyone. The product exceeded my expectations, and it arrived earlier than expected. The website was easy to navigate, and I appreciated the free shipping. The customer support team was also great in helping me with a small issue I had. Overall, a very satisfying purchase, and I will definitely buy from here again.",
      rating: "4.9",
    },
    {
      name: "Isha Verma",
      dateTime: "07-April-2023 08:30AM",
      description:
        "Okay product, but it didn’t meet my expectations. The product works, but it didn’t quite live up to the description on the website. I was expecting better quality, and I was a little let down. The delivery was on time, but I’m not sure I’d repurchase this item unless it’s improved in the future.",
      rating: "3.2",
    },
    {
      name: "Amit Kumar",
      dateTime: "10-April-2023 06:45PM",
      description:
        "Very satisfied with the product and service. Will shop again. The product arrived quickly, was well-packaged, and met all of my expectations. It was easy to navigate the website and track my order. I am very happy with the entire experience and will return to purchase other items in the future.",
      rating: "4.7",
    },
    {
      name: "Shalini Yadav",
      dateTime: "12-April-2023 09:00AM",
      description:
        "The product broke after a few uses. Very disappointed. I was excited to receive the product, but after a few days of use, it broke. I contacted customer service, but it took a long time to get a response, and by then, the return window had passed. I am really disappointed in the quality of the product and the lack of support from the company.",
      rating: "2.0",
    },
    {
      name: "Manish Gupta",
      dateTime: "15-April-2023 01:00PM",
      description:
        "Perfect product! I will definitely recommend it to my friends. The product was everything I hoped for. It’s of great quality, and it arrived on time. The website was easy to use, and I had a smooth checkout process. I’m extremely satisfied and would happily purchase from this store again.",
      rating: "5.0",
    },
    {
      name: "Neha Sharma",
      dateTime: "18-April-2023 04:30PM",
      description:
        "The product quality is good, but the packaging was poor. While the product works well and I’m happy with it, the packaging left much to be desired. The item was loosely packed, which led to some minor damage to the box. However, the product itself was undamaged and performed well.",
      rating: "3.5",
    },
    {
      name: "Pooja Agarwal",
      dateTime: "20-April-2023 02:00PM",
      description:
        "Excellent service and a great product. Highly recommend this store. I’ve bought from here several times, and each time I’ve had a positive experience. The products are of great quality, and shipping is fast. Customer service is also very helpful, always answering any questions I have. This store has become my go-to for online shopping.",
      rating: "5.0",
    },
    {
      name: "Arjun Singh",
      dateTime: "22-April-2023 10:10AM",
      description:
        "The item arrived late and the quality didn’t match the description. I was really looking forward to receiving the product, but it arrived a few days later than expected. When it finally arrived, it didn’t live up to the description online. It wasn’t as sturdy or well-made as advertised. Overall, a very disappointing experience.",
      rating: "2.3",
    },
  ];

  return (
    <Col>
      <Row justify={"space-between"}>
        <Space
          style={{
            fontSize: "18px",
            fontWeight: "500",
          }}
        >
          Reviews ⭐
        </Space>
        <Button
          onClick={() => {
            setIsReviewBoxOpende(true);
          }}
        >
          <AiFillEdit />
          Write review
        </Button>
      </Row>
      <br></br>
      <Col>
        {reviews.map((e) => (
          <Col className="review-box">
            <Row align={"middle"}>
              <Avatar shape="square" size={"large"} icon={e.name[0]} />
              <Space
                style={{
                  fontSize: "20px",
                }}
              >
                {" "}
                {e.name}
              </Space>
            </Row>
            <Row
              align={"middle"}
              style={{
                gap: "10px",
                margin: "10px 0px",
                fontSize: "18px",
              }}
            >
              <FaStar color="orange" size={"20"} />
              {e.rating}
            </Row>
            <Space>{e.dateTime}</Space>
            <Space>{e.description}</Space>
          </Col>
        ))}
      </Col>
      <Modal
        title="Write a Review"
        open={isReviewBoxOpened}
        onCancel={() => {
          setIsReviewBoxOpende(false);
        }}
        afterClose={() => {
          setIsReviewBoxOpende(false);
        }}
      >
        <Col>
          <Row justify={"center"}>
            <Rate
              style={{
                fontSize: "30px",
              }}
              allowHalf
              defaultValue={2.5}
            />
          </Row>
          <Row>
            <Space>Message</Space>
          </Row>
          <br></br>
          <Row>
            <TextArea rows={4} placeholder="Write your experiance here.." maxLength={6} />
          </Row>
        </Col>
      </Modal>
    </Col>
  );
};

export default ProductReviewSection;

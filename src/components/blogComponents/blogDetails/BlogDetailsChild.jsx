import React from "react";
import {
  Box,
  ListItemAvatar,
  Avatar,
  Typography,
  CardMedia,
  alpha,
} from "@mui/material";
import { FaCalendarAlt } from "react-icons/fa";
import { capitalizeWords } from "@/utils/capitalizeWord";
import { formatBlogDate } from "@/utils/dateFormatter";
import Link from "next/link";

const BlogDetailsChild = ({ post }) => {
  const { slug, title, createdAt, content, author, featuredImage } = post;
  return (
    <React.Fragment>
      <Box
        width={{ xs: "100%", md: "85%" }}
        sx={{ margin: "0 auto", textAlign: "center" }}
      >
        <Typography
          variant="h2"
          textAlign="left"
          sx={{ fontSize: { xs: "30px", md: "70px" } }}
        >
          {title}
        </Typography>
        <Typography
          sx={{
            textAlign: "left",
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
            gap: 1,
            fontSize: { xs: 14, md: 20 },
            color: "grey.normal",
          }}
        >
          <span style={{ marginTop: "5px" }}>
            <FaCalendarAlt />
          </span>
          <span>{formatBlogDate(createdAt)}</span>
        </Typography>
        <CardMedia
          sx={{
            height: { xs: "250px", md: "520px" },
            borderRadius: "16px",
            objectFit: "cover",
            my: 3,
          }}
          image={featuredImage.url}
          alt="Blog Img"
          title="Article Image"
        />
        <Box
          component="div"
          textAlign="left"
          color="#fff"
          // fontSize={23}
          lineHeight={1.5}
          dangerouslySetInnerHTML={{ __html: content.html }}
        />
        <Box
          sx={{
            height: "auto",
            width: "100%",
            bgcolor: alpha("#fff", 0.3),
            mt: 7,
            p: "0 12px 20px ",
            position: "relative",
            borderRadius: "12px",
          }}
        >
          <ListItemAvatar
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: "80px",
              left: "50%",
              transform: "translateX(-50%)",
              position: "absolute",
              top: -30,
            }}
          >
            <Avatar
              alt={author.name}
              src={author.photo.url}
              sx={{ height: "80px", width: "80px" }}
            />
          </ListItemAvatar>
          <Typography
            pt={7}
            variant="h2"
            textAlign="center"
            sx={{ fontSize: { xs: "30px", md: "30px" } }}
          >
            {capitalizeWords(author.name)}
          </Typography>
          <Typography
            textAlign="center"
            sx={{
              maxWidth: "100%",
              overflowWrap: "break-word",
              color: "grey.lightHover",
              fontSize: { xs: "14px", md: "18px" },
            }}
          >
            {author.bio
              ? author.bio
              : "Alabi Damilare is an accomplished author known for his captivating storytelling across various genres. With a keen eye for detail and a gift for crafting compelling narratives, Damilare's works resonate with readers, leaving a lasting impact..."}
          </Typography>
        </Box>
      </Box>
    </React.Fragment>
  );
};

export default BlogDetailsChild;

import express from "express";
import cors from "cors";
import { Router } from "express";
import data from './userDesign.js'
import upload from "./middlewares/uploads.js";

import { user } from "./user.js";
const app = express();
app.use(cors());

app.use(express.static("public"))

app.get('/api', (req, res) => {
  const html = `
    <ul>
      ${user.map((u) => `<li>${u.comments[0]?.user || 'No comments'}</li>`).join('')}
    </ul>
  `;
  res.send(html);
});

app.get("/api/companyDetails", (req, res) => {
  res.json(user);
});

app.route('/api/user/:id').get((req, res) => {
  const id = Number(req.params.id); 
  const foundUser = user.find((u) => u._id === id); // Using foundUser to avoid naming conflicts
  if (foundUser) {
    res.json(foundUser);
  } else {
    res.status(404).json({ message: 'User not found' }); // Handling case when user is not found
  }
});

app.get("/userDesign",(req,res)=>{
  res.json(data)
})

app.route("/userDesign/:id").get((req,res)=>{
  const id = parseInt(req.params.id, 10); 
  const user = data.find(user => user.id === id)
  if(!user){
      res.status(404).json({message: "User not found"})
  }
  res.json(user)

})


app.post('/api/upload', upload.single('image'), (req, res) => {
  try {
    const imageUrl = req.file.path;
    res.status(200).json({
      message: 'Image uploaded successfully',
      url: imageUrl,
    });
  } catch (error) {
    console.error('Error uploading image:', error);
    res.status(500).json({ message: 'Image upload failed' });
  }
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

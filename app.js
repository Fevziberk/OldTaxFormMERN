const express= require("express")
const collection = require("./mongo")
const bodyParser = require('body-parser');
const cors = require("cors")
const app = express()
app.use(bodyParser.json());
app.use(express.json())
app.use/express.urlencoded({extended:true})
app.use(cors())

app.get("/",cors(),(req,res)=>{})
const bcrypt = require('bcrypt');

app.post("/", async (req, res) => {
  const { username, password } = req.body;
  
  try {
    
    const user = await collection.findOne({ username: username });
    
    if (user) {
     
      bcrypt.compare(password, user.password, (err, result) => {
        if (err) {
          console.error(err);
          res.json("error");
        } else {
          if (result) {
            
            res.json("exist");
          } else {
            
            res.json("notexist");
          }
        }
      });
    } else {
      
      res.json("notexist");
    }
  } catch (error) {
    console.error(error);
    res.json("error");
  }
});

app.get("/page1", cors(), async (req, res) => {
    try {
      
      const usernameToRetrieve =  req.query.username;
  
      
      const user = await collection.findOne({ username: usernameToRetrieve });
  
      if (!user) {
        
        res.status(404).json({ message: "User not found" });
        return;
      }
  
      
      const row1 = user.row1; 
const row2 = user.row2;
const row3 = user.row3;
const row4 = user.row4;
const row5 = user.row5;
const row6 = user.row6;
const row7 = user.row7;
const row8 = user.row8;
const row9 = user.row9;
const row10 = user.row10;
const row11 = user.row11;
  
      
      res.status(200).json({ user: user,row1: row1,
        row2: row2,
        row3: row3,
        row4: row4,
        row5: row5,
        row6: row6,
        row7: row7,
        row8: row8,
        row9: row9,
        row10: row10,
        row11: row11
        });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Internal server error" });
    }
  });

  app.post("/register", async (req, res) => {
    const { username, password } = req.body;

    try {
        const existingUser = await collection.findOne({ username: username });

        if (existingUser === null) { // Check for null explicitly
            const saltRounds = 10;
            bcrypt.hash(password, saltRounds, async (err, hashedPassword) => {
                if (err) {
                    console.error(err);
                    res.json("error");
                } else {
                  const newUser = {
                    username: username,
                    password: hashedPassword,
                    row1: {
                      date1: null,
                      no1: null,
                      whoFrom1: null,
                      type1: null,
                      price1: null,
                    },
                  row2: {
                      date2: null,
                      no2: null,
                      whoFrom2: null,
                      type2: null,
                      price2: null,
                    },
                  row3: {
                      date3: null,
                      no3: null,
                      whoFrom3: null,
                      type3: null,
                      price3: null,
                    },
                  row4: {
                      date4: null,
                      no4: null,
                      whoFrom4: null,
                      type4: null,
                      price4: null,
                    },
                  row5: {
                      date5: null,
                      no5: null,
                      whoFrom5: null,
                      type5: null,
                      price5: null,
                    },
                  row6: {
                      date6: null,
                      no6: null,
                      whoFrom6: null,
                      type6: null,
                      price6: null,
                    },
                  row7: {
                      date7: null,
                      no7: null,
                      whoFrom7: null,
                      type7: null,
                      price7: null,
                    },
                  row8: {
                      date8: null,
                      no8: null,
                      whoFrom8: null,
                      type8: null,
                      price8: null,
                    },
                  row9: {
                      date9: null,
                      no9: null,
                      whoFrom9: null,
                      type9: null,
                      price9: null,
                    },
                  row10: {
                      date10: null,
                      no10: null,
                      whoFrom10: null,
                      type10: null,
                      price10: null,
                    },
                  row11: {
                      date11: null,
                      no11: null,
                      whoFrom11: null,
                      type11: null,
                      price11: null,
                    }
                  
                  };

                    const createdUser = await collection.create(newUser);

                    if (createdUser) {
                        res.json("registered");
                    } else {
                        res.json("error");
                    }
                }
            });
        } else {
            res.json("exist");
        }
    } catch (error) {
        console.error(error);
        res.json("error");
    }
});




 

 app.post('/page1', async (req, res) => {
  const formData = req.body;

  const username = formData.username;

  try {
    
    const user = await collection.findOne({ username: username });
    
    if (!user) {
      
      res.json("notexist");
    } else {
      res.json("exist");
      user.row1 = {
        date1: formData.date1 || user.row1.date1,
        no1: formData.no1 || user.row1.no1,
        whoFrom1: formData.whoFrom1 || user.row1.whoFrom1,
        type1: formData.type1 || user.row1.type1,
        price1: formData.price1 || user.row1.price1,
      };
    user.row2 = {
        date2: formData.date2 || user.row2.date2,
        no2: formData.no2 || user.row2.no2,
        whoFrom2: formData.whoFrom2 || user.row2.whoFrom2,
        type2: formData.type2 || user.row2.type2,
        price2: formData.price2 || user.row2.price2,
      };
user.row3 = {
        date3: formData.date3 || user.row3.date3,
        no3: formData.no3 || user.row3.no3,
        whoFrom3: formData.whoFrom3 || user.row3.whoFrom3,
        type3: formData.type3 || user.row3.type3,
        price3: formData.price3 || user.row3.price3,
      };
user.row4 = {
        date4: formData.date4 || user.row4.date4,
        no4: formData.no4 || user.row4.no4,
        whoFrom4: formData.whoFrom4 || user.row4.whoFrom4,
        type4: formData.type4 || user.row4.type4,
        price4: formData.price4 || user.row4.price4,
      };
user.row5 = {
        date5: formData.date5 || user.row5.date5,
        no5: formData.no5 || user.row5.no5,
        whoFrom5: formData.whoFrom5 || user.row5.whoFrom5,
        type5: formData.type5 || user.row5.type5,
        price5: formData.price5 || user.row5.price5,
      };
user.row6 = {
        date6: formData.date6 || user.row6.date6,
        no6: formData.no6 || user.row6.no6,
        whoFrom6: formData.whoFrom6 || user.row6.whoFrom6,
        type6: formData.type6 || user.row6.type6,
        price6: formData.price6 || user.row6.price6,
      };
user.row7 = {
        date7: formData.date7 || user.row7.date7,
        no7: formData.no7 || user.row7.no7,
        whoFrom7: formData.whoFrom7 || user.row7.whoFrom7,
        type7: formData.type7 || user.row7.type7,
        price7: formData.price7 || user.row7.price7,
      };
user.row8 = {
        date8: formData.date8 || user.row8.date8,
        no8: formData.no8 || user.row8.no8,
        whoFrom8: formData.whoFrom8 || user.row8.whoFrom8,
        type8: formData.type8 || user.row8.type8,
        price8: formData.price8 || user.row8.price8,
      };
user.row9 = {
        date9: formData.date9 || user.row9.date9,
        no9: formData.no9 || user.row9.no9,
        whoFrom9: formData.whoFrom9 || user.row9.whoFrom9,
        type9: formData.type9 || user.row9.type9,
        price9: formData.price9 || user.row9.price9,
      };
user.row10 = {
        date10: formData.date10 || user.row10.date10,
        no10: formData.no10 || user.row10.no10,
        whoFrom10: formData.whoFrom10 || user.row10.whoFrom10,
        type10: formData.type10 || user.row10.type10,
        price10: formData.price10 || user.row10.price10,
      };
user.row11 = {
        date11: formData.date11 || user.row11.date11,
        no11: formData.no11 || user.row11.no11,
        whoFrom11: formData.whoFrom11 || user.row11.whoFrom11,
        type11: formData.type11 || user.row11.type11,
        price11: formData.price11 || user.row11.price11,
      };


      
      await user.save();

      
    }
  } catch (error) {
    console.error(error);
    
  }
});

app.listen(3000,()=>{

    console.log("port connected to 3000")
})
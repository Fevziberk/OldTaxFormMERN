const mongoose=require("mongoose")
mongoose.connect("mongodb+srv://Berqque:Database123321 @atlascluster.vt1is9m.mongodb.net/")
.then(()=>{
    console.log("mongodb connected");
})
.catch(()=>{
    console.log('failed');
})


const newSchema=new mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    row1: {
        date1: {
            type: String,
            default: null
        },
        no1: {
            type: String,
            default: null
        },
        whoFrom1: {
            type: String,
            default: null
        },
        type1: {
            type: String,
            default: null
        },
        price1: {
            type: Number,
            default: null
        }
    },
row2: {
        date2: {
            type: String,
            default: null
        },
        no2: {
            type: String,
            default: null
        },
        whoFrom2: {
            type: String,
            default: null
        },
        type2: {
            type: String,
            default: null
        },
        price2: {
            type: Number,
            default: null
        }
    },
row3: {
        date3: {
            type: String,
            default: null
        },
        no3: {
            type: String,
            default: null
        },
        whoFrom3: {
            type: String,
            default: null
        },
        type3: {
            type: String,
            default: null
        },
        price3: {
            type: Number,
            default: null
        }
    },
row4: {
        date4: {
            type: String,
            default: null
        },
        no4: {
            type: String,
            default: null
        },
        whoFrom4: {
            type: String,
            default: null
        },
        type4: {
            type: String,
            default: null
        },
        price4: {
            type: Number,
            default: null
        }
    },
row5: {
        date5: {
            type: String,
            default: null
        },
        no5: {
            type: String,
            default: null
        },
        whoFrom5: {
            type: String,
            default: null
        },
        type5: {
            type: String,
            default: null
        },
        price5: {
            type: Number,
            default: null
        }
    },
row6: {
        date6: {
            type: String,
            default: null
        },
        no6: {
            type: String,
            default: null
        },
        whoFrom6: {
            type: String,
            default: null
        },
        type6: {
            type: String,
            default: null
        },
        price6: {
            type: Number,
            default: null
        }
    },
row7: {
        date7: {
            type: String,
            default: null
        },
        no7: {
            type: String,
            default: null
        },
        whoFrom7: {
            type: String,
            default: null
        },
        type7: {
            type: String,
            default: null
        },
        price7: {
            type: Number,
            default: null
        }
    },
row8: {
        date8: {
            type: String,
            default: null
        },
        no8: {
            type: String,
            default: null
        },
        whoFrom8: {
            type: String,
            default: null
        },
        type8: {
            type: String,
            default: null
        },
        price8: {
            type: Number,
            default: null
        }
    },
row9: {
        date9: {
            type: String,
            default: null
        },
        no9: {
            type: String,
            default: null
        },
        whoFrom9: {
            type: String,
            default: null
        },
        type9: {
            type: String,
            default: null
        },
        price9: {
            type: Number,
            default: null
        }
    },
row10: {
        date10: {
            type: String,
            default: null
        },
        no10: {
            type: String,
            default: null
        },
        whoFrom10: {
            type: String,
            default: null
        },
        type10: {
            type: String,
            default: null
        },
        price10: {
            type: Number,
            default: null
        }
    },
row11: {
        date11: {
            type: String,
            default: null
        },
        no11: {
            type: String,
            default: null
        },
        whoFrom11: {
            type: String,
            default: null
        },
        type11: {
            type: String,
            default: null
        },
        price11: {
            type: Number,
            default: null
        }
    }

})

const collection = mongoose.model("collection",newSchema)

module.exports=collection
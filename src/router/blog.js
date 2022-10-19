const hanldeBlogRouter = (req, res) =>{
    const method = req.method //GET POST
    const url = req.url
    const path = url.split('?')[0]

    //獲取BLOG列表
    if (method === 'GET' && path ==='/api/blog/list'){
        return{
            msg: '這是取得BLOG列表的路徑'
        }
    }

    //建立一篇BLOG
    if (method === 'POST' && path ==='/api/blog/new'){
        return{
            msg: '這是創建BLOG的路徑'
        }
    }

    //更新一篇BLOG
    if (method === 'POST' && path ==='/api/blog/update'){
        return{
            msg: '這是更新BLOG的路徑'
        }
    }

    //刪除一篇BLOG
    if (method === 'POST' && path ==='/api/blog/del'){
        return{
            msg: '這是刪除BLOG的路徑'
        }
    }
}

module.exports = hanldeBlogRouter
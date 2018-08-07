# bookmark
一个基于express的书签收藏夹

## Build Setup

``` bash
# 因为数据库信息不公开，所以要建一个数据库信息表，文件名为databaseConfig.js,放在modules文件夹下
module.exports = {
	connectionLimit : 50, //数据库链接超时时间
	host:'数据库地址',
	user:'数据库用户名',
	password:'数据库密码',
	database:'数据库',
	port:端口号
}

# 阿里云oss信息不公开，所以要建一个oss信息表，文件名为ossConfig.js,放在modules文件夹下
module.exports = {
	region: 'oss-cn-hangzhou',	//oss区域
  	accessKeyId: 'accessKeyId',
  	accessKeySecret: 'accessKeySecret',
  	bucket: 'bucket'
}

# 拉取代码
https://github.com/evinLiang/bookmark.git

# 进入项目文件夹
cd bookmark

# 安装依赖
npm install

# 运行
npm start => `http://localhost:3000`
```

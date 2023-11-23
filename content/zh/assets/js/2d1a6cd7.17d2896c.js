"use strict";(self.webpackChunkrocketmq_docs=self.webpackChunkrocketmq_docs||[]).push([[587],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},c=Object.keys(e);for(o=0;o<c.length;o++)n=c[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(o=0;o<c.length;o++)n=c[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),p=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},k="mdxType",i={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),k=p(n),m=r,d=k["".concat(s,".").concat(m)]||k[m]||i[m]||c;return n?o.createElement(d,a(a({ref:t},u),{},{components:n})):o.createElement(d,a({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,a=new Array(c);a[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[k]="string"==typeof e?e:r,a[1]=l;for(var p=2;p<c;p++)a[p]=n[p];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},90914:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>i,frontMatter:()=>c,metadata:()=>l,toc:()=>p});var o=n(87462),r=(n(67294),n(3905));const c={},a="RocketMQ Connect\u5b9e\u62184",l={unversionedId:"connect/07RocketMQ Connect In Action4",id:"connect/07RocketMQ Connect In Action4",title:"RocketMQ Connect\u5b9e\u62184",description:"SFTP Server(\u6587\u4ef6\u6570\u636e) -> RocketMQ Connect -> SFTP Server(\u6587\u4ef6)",source:"@site/docs/10-connect/07RocketMQ Connect In Action4.md",sourceDirName:"10-connect",slug:"/connect/07RocketMQ Connect In Action4",permalink:"/zh/docs/4.x/connect/07RocketMQ Connect In Action4",draft:!1,editUrl:"https://github.com/apache/rocketmq-site/tree/new-official-website/docs/10-connect/07RocketMQ Connect In Action4.md",tags:[],version:"current",frontMatter:{},sidebar:"myAutogeneratedSidebar",previous:{title:"RocketMQ Connect\u5b9e\u62183",permalink:"/zh/docs/4.x/connect/06RocketMQ Connect In Action3"},next:{title:"RocketMQ Connect\u5b9e\u62185",permalink:"/zh/docs/4.x/connect/08RocketMQ  Connect In Action5-ES"}},s={},p=[{value:"\u51c6\u5907",id:"\u51c6\u5907",level:2},{value:"\u542f\u52a8RocketMQ",id:"\u542f\u52a8rocketmq",level:3},{value:"\u6784\u5efa Connector Runtime",id:"\u6784\u5efa-connector-runtime",level:3},{value:"\u6784\u5efa SFTP Connector Plugin",id:"\u6784\u5efa-sftp-connector-plugin",level:3},{value:"\u5355\u673a\u6a21\u5f0f\u8fd0\u884c Connector Worker",id:"\u5355\u673a\u6a21\u5f0f\u8fd0\u884c-connector-worker",level:3},{value:"\u642d\u5efa SFTP \u670d\u52a1\u5668",id:"\u642d\u5efa-sftp-\u670d\u52a1\u5668",level:3},{value:"\u521b\u5efa\u6e90\u7aef\u6d4b\u8bd5\u6587\u4ef6",id:"\u521b\u5efa\u6e90\u7aef\u6d4b\u8bd5\u6587\u4ef6",level:3},{value:"\u542f\u52a8Connector",id:"\u542f\u52a8connector",level:2},{value:"\u542f\u52a8 SFTP source connector",id:"\u542f\u52a8-sftp-source-connector",level:3},{value:"\u542f\u52a8 SFTP sink connector",id:"\u542f\u52a8-sftp-sink-connector",level:3}],u={toc:p},k="wrapper";function i(e){let{components:t,...n}=e;return(0,r.kt)(k,(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"rocketmq-connect\u5b9e\u62184"},"RocketMQ Connect\u5b9e\u62184"),(0,r.kt)("p",null,"SFTP Server(\u6587\u4ef6\u6570\u636e) -> RocketMQ Connect -> SFTP Server(\u6587\u4ef6)"),(0,r.kt)("h2",{id:"\u51c6\u5907"},"\u51c6\u5907"),(0,r.kt)("h3",{id:"\u542f\u52a8rocketmq"},"\u542f\u52a8RocketMQ"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Linux/Unix/Mac"),(0,r.kt)("li",{parentName:"ol"},"64bit JDK 1.8+;"),(0,r.kt)("li",{parentName:"ol"},"Maven 3.2.x\u6216\u4ee5\u4e0a\u7248\u672c;"),(0,r.kt)("li",{parentName:"ol"},"\u542f\u52a8 RocketMQ\u3002\u4f7f\u7528",(0,r.kt)("a",{parentName:"li",href:"https://rocketmq.apache.org/docs/4.x/"},"RocketMQ 4.x")," \u6216\n",(0,r.kt)("a",{parentName:"li",href:"https://rocketmq.apache.org/docs/quickStart/01quickstart/"},"RocketMQ 5.x"),"\u7248\u672c\u5747\u53ef;"),(0,r.kt)("li",{parentName:"ol"},"\u5de5\u5177\u6d4b\u8bd5 RocketMQ \u6d88\u606f\u6536\u53d1\u662f\u5426\u6b63\u5e38\u3002\u8be6\u89c1",(0,r.kt)("a",{parentName:"li",href:"https://rocketmq.apache.org/docs/4.x/"},"RocketMQ 4.x")," \u6216\n",(0,r.kt)("a",{parentName:"li",href:"https://rocketmq.apache.org/docs/quickStart/01quickstart/"},"RocketMQ 5.x"),"\u6587\u6863\u3002")),(0,r.kt)("p",null,"\u8fd9\u91cc\u5229\u7528\u73af\u5883\u53d8\u91cfNAMESRV_ADDR\u6765\u544a\u8bc9\u5de5\u5177\u5ba2\u6237\u7aefRocketMQ\u7684NameServer\u5730\u5740\u4e3alocalhost:9876"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"#$ cd distribution/target/rocketmq-4.9.7/rocketmq-4.9.7\n$ cd distribution/target/rocketmq-5.1.4/rocketmq-5.1.4\n\n$ export NAMESRV_ADDR=localhost:9876\n$ sh bin/tools.sh org.apache.rocketmq.example.quickstart.Producer\n SendResult [sendStatus=SEND_OK, msgId= ...\n\n$ sh bin/tools.sh org.apache.rocketmq.example.quickstart.Consumer\n ConsumeMessageThread_%d Receive New Messages: [MessageExt...\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u8bf4\u660e"),"\uff1aRocketMQ\u5177\u5907\u81ea\u52a8\u521b\u5efaTopic\u548cGroup\u7684\u529f\u80fd\uff0c\u5728\u53d1\u9001\u6d88\u606f\u6216\u8ba2\u9605\u6d88\u606f\u65f6\uff0c\u5982\u679c\u76f8\u5e94\u7684Topic\u6216Group\u4e0d\u5b58\u5728\uff0cRocketMQ\u4f1a\u81ea\u52a8\u521b\u5efa\u5b83\u4eec\u3002\u56e0\u6b64\u4e0d\u9700\u8981\u63d0\u524d\u521b\u5efaTopic\u548cGroup\u3002"),(0,r.kt)("h3",{id:"\u6784\u5efa-connector-runtime"},"\u6784\u5efa Connector Runtime"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"git clone https://github.com/apache/rocketmq-connect.git\n\ncd  rocketmq-connect\n\nexport RMQ_CONNECT_HOME=`pwd`\n\nmvn -Prelease-connect -Dmaven.test.skip=true clean install -U\n")),(0,r.kt)("h3",{id:"\u6784\u5efa-sftp-connector-plugin"},"\u6784\u5efa SFTP Connector Plugin"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"cd $RMQ_CONNECT_HOME/connectors/rocketmq-connect-sftp/\n\nmvn clean package -Dmaven.test.skip=true\n")),(0,r.kt)("p",null,"\u5c06 SFTP RocketMQ Connector \u7f16\u8bd1\u597d\u7684\u5305\u653e\u5165Runtime\u52a0\u8f7d\u7684Plugin\u76ee\u5f55"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"mkdir -p /Users/YourUsername/rocketmqconnect/connector-plugins\ncp target/rocketmq-connect-sftp-0.0.1-SNAPSHOT-jar-with-dependencies.jar /Users/YourUsername/rocketmqconnect/connector-plugins\n")),(0,r.kt)("h3",{id:"\u5355\u673a\u6a21\u5f0f\u8fd0\u884c-connector-worker"},"\u5355\u673a\u6a21\u5f0f\u8fd0\u884c Connector Worker"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"connect-standalone.conf"),"\u4e2d\u914d\u7f6e\u4e86RocketMQ\u8fde\u63a5\u5730\u5740\u7b49\u4fe1\u606f\uff0c\u9700\u8981\u6839\u636e\u4f7f\u7528\u60c5\u51b5\u8fdb\u884c\u4fee\u6539"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"cd $RMQ_CONNECT_HOME/distribution/target/rocketmq-connect-0.0.1-SNAPSHOT/rocketmq-connect-0.0.1-SNAPSHOT\n\nvim conf/connect-standalone.conf\n")),(0,r.kt)("p",null,"\u793a\u4f8b\u914d\u7f6e\u4fe1\u606f\u5982\u4e0b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'workerId=standalone-worker\nstorePathRootDir=/Users/YourUsername/rocketmqconnect/storeRoot\n\n## Http port for user to access REST API\nhttpPort=8082\n\n# Rocketmq namesrvAddr\nnamesrvAddr=localhost:9876\n\n# RocketMQ acl\naclEnable=false\n#accessKey=rocketmq\n#secretKey=12345678\n\nclusterName="DefaultCluster"\n\n# \u63d2\u4ef6\u5730\u5740\uff0c\u7528\u4e8eWorker\u52a0\u8f7dSource/Sink Connector\u63d2\u4ef6\npluginPaths=/Users/YourUsername/rocketmqconnect/connector-plugins\n')),(0,r.kt)("p",null,"\u5355\u673a\u6a21\u5f0f\uff08standalone\uff09\u4e0b\uff0cRocketMQ Connect \u4f1a\u628a\u540c\u6b65\u4f4d\u70b9\u4fe1\u606f\u6301\u4e45\u5316\u5230\u672c\u5730\u6587\u4ef6\u76ee\u5f55 storePathRootDir"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"storePathRootDir=/Users/YourUsername/rocketmqconnect/storeRoot")),(0,r.kt)("p",null,"\u5982\u679c\u60f3\u91cd\u7f6e\u540c\u6b65\u4f4d\u70b9\uff0c\u5219\u9700\u8981\u5220\u9664\u6301\u4e45\u5316\u7684\u4f4d\u70b9\u4fe1\u606f\u6587\u4ef6"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"rm -rf /Users/YourUsername/rocketmqconnect/storeRoot/*\n")),(0,r.kt)("p",null,"\u91c7\u7528\u5355\u673a\u6a21\u5f0f\u542f\u52a8Connector Worker"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"sh bin/connect-standalone.sh -c conf/connect-standalone.conf &\n")),(0,r.kt)("h3",{id:"\u642d\u5efa-sftp-\u670d\u52a1\u5668"},"\u642d\u5efa SFTP \u670d\u52a1\u5668"),(0,r.kt)("p",null,"SFTP\uff08SSH File Transfer Protocol\uff09\u662f\u4e00\u4e2a\u6587\u4ef6\u4f20\u8f93\u534f\u8bae\uff0c\u7528\u4e8e\u5728\u8ba1\u7b97\u673a\u4e4b\u95f4\u8fdb\u884c\u5b89\u5168\u7684\u6587\u4ef6\u4f20\u8f93\u3002SFTP\u5efa\u7acb\u5728SSH\u8fde\u63a5\u4e4b\u4e0a\uff0c\u5b83\u662f\u901a\u8fc7SSH\uff08Secure Shell\uff09\u534f\u8bae\u8fdb\u884c\u52a0\u5bc6\u548c\u8eab\u4efd\u9a8c\u8bc1\u7684\u3002"),(0,r.kt)("p",null,"\u8fd9\u91cc\u4e3a\u4e86\u65b9\u4fbf\u6f14\u793a\uff0c\u4f7f\u7528 MAC OS \u81ea\u5e26\u7684 SFTP \u670d\u52a1\uff08\u53ea\u9700\u5f00\u542f\u201c\u8fdc\u7a0b\u767b\u5f55\u201d\u5373\u53ef\u8bbf\u95ee\uff09\uff0c\u8be6\u7ec6\u53c2\u89c1",(0,r.kt)("a",{parentName:"p",href:"https://support.apple.com/zh-cn/guide/mac-help/mchlp1066/mac"},"\u5141\u8bb8\u8fdc\u7a0b\u7535\u8111\u8bbf\u95ee\u4f60\u7684 Mac"),"\u6587\u6863\u3002"),(0,r.kt)("h3",{id:"\u521b\u5efa\u6e90\u7aef\u6d4b\u8bd5\u6587\u4ef6"},"\u521b\u5efa\u6e90\u7aef\u6d4b\u8bd5\u6587\u4ef6"),(0,r.kt)("p",null,"\u521b\u5efa\u6e90\u7aef\u6d4b\u8bd5\u6587\u4ef6 source.txt \uff0c\u5e76\u5199\u5165\u6d4b\u8bd5\u6570\u636e"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"mkdir -p /Users/YourUsername/rocketmqconnect/sftp-test/\n\ncd /Users/YourUsername/rocketmqconnect/sftp-test/\n\ntouch source.txt\n\necho '\u5f20\u4e09|100000202211290001|20221129001|30000.00|2022-11-28|03:00:00|7.00\n\u674e\u56db|100000202211290002|20221129002|40000.00|2022-11-28|04:00:00|9.00\n\u8d75\u4e94|100000202211290003|20221129003|50000.00|2022-11-28|05:00:00|12.00' >> source.txt\n")),(0,r.kt)("p",null,"\u767b\u5f55 SFTP \u670d\u52a1\uff0c\u9a8c\u8bc1\u662f\u5426\u80fd\u6b63\u5e38\u8bbf\u95ee\u3002\u8f93\u5165\u4e0b\u9762\u547d\u4ee4\uff0c\u8f93\u5165\u5bc6\u7801\u540e\u5373\u53ef\u8fdb\u5165SFTP\u670d\u52a1\u5668"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"# sftp -P port YourUsername@hostname\nsftp -P 22 YourUsername@127.0.0.1\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u8bf4\u660e"),"\uff1a\u7531\u4e8e\u662f\u672c\u673aMAC OS\u63d0\u4f9b\u7684SFTP\u670d\u52a1\uff0c\u6240\u4ee5\u5730\u5740\u662f 127.0.0.1\uff0c \u7aef\u53e3\u662f\u9ed8\u8ba4\u768422\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"sftp> cd /Users/YourUsername/rocketmqconnect/sftp-test/\nsftp> ls source.txt\nsftp> bye\n")),(0,r.kt)("h2",{id:"\u542f\u52a8connector"},"\u542f\u52a8Connector"),(0,r.kt)("h3",{id:"\u542f\u52a8-sftp-source-connector"},"\u542f\u52a8 SFTP source connector"),(0,r.kt)("p",null,"\u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4\u542f\u52a8 SFTP source connector\uff0cconnector\u5c06\u4f1a\u8fde\u63a5\u5230SFTP\u670d\u52a1\u8bfb\u53d6source.txt\u6587\u4ef6\uff0c\n\u6bcf\u8bfb\u53d6\u6587\u4ef6\u4e2d\u7684\u4e00\u884c\u5185\u5bb9\uff0c\u5c31\u4f1a\u89e3\u6790\u5e76\u5c01\u88c5\u6210\u901a\u7528\u7684ConnectRecord\u5bf9\u8c61\uff0c\u53d1\u9001\u5230RocketMQ Topic\u5f53\u4e2d\uff0c\n\u4f9bSink Connector\u8fdb\u884c\u6d88\u8d39\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'curl -X POST --location "http://localhost:8082/connectors/SftpSourceConnector" --http1.1 \\\n    -H "Host: localhost:8082" \\\n    -H "Content-Type: application/json" \\\n    -d \'{\n          "connector.class": "org.apache.rocketmq.connect.http.sink.SftpSourceConnector",\n          "host": "127.0.0.1",\n          "port": 22,\n          "username": "YourUsername",\n          "password": "yourPassword",\n          "filePath": "/Users/YourUsername/rocketmqconnect/sftp-test/source.txt",\n          "connect.topicname": "sftpTopic",\n          "fieldSeparator": "|",\n          "fieldSchema": "username|idCardNo|orderNo|orderAmount|trxDate|trxTime|profit"\n        }\'\n')),(0,r.kt)("p",null,"curl\u8bf7\u6c42\u8fd4\u56destatus:200\u5219\u8868\u793a\u521b\u5efa\u6210\u529f\uff0c\u8fd4\u56de\u6837\u4f8b\uff1a"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},'{"status":200,"body":{"connector.class":"...')),(0,r.kt)("p",null,"\u770b\u5230\u4ee5\u4e0b\u65e5\u5fd7\u8bf4\u660e file source connector \u542f\u52a8\u6210\u529f\u4e86"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"tail -100f ~/logs/rocketmqconnect/connect_runtime.log\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Start connector SftpSourceConnector and set target state STARTED successed!!")),(0,r.kt)("h3",{id:"\u542f\u52a8-sftp-sink-connector"},"\u542f\u52a8 SFTP sink connector"),(0,r.kt)("p",null,"\u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4\u542f\u52a8 SFTP sink connector\uff0cconnector\u5c06\u4f1a\u8ba2\u9605RocketMQ Topic\u7684\u6570\u636e\u8fdb\u884c\u6d88\u8d39\uff0c\n\u5e76\u5c06\u6bcf\u4e2a\u6d88\u606f\u8f6c\u6362\u4e3a\u4e00\u884c\u6587\u5b57\u5185\u5bb9\uff0c\u7136\u540e\u901a\u8fc7SFTP\u534f\u8bae\u5199\u5165\u5230sink.txt\u6587\u4ef6\u4e2d\u53bb\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'curl -X POST --location "http://localhost:8082/connectors/SftpSinkConnector" --http1.1 \\\n    -H "Host: localhost:8082" \\\n    -H "Content-Type: application/json" \\\n    -d \'{\n          "connector.class": "org.apache.rocketmq.connect.http.sink.SftpSinkConnector",\n          "host": "127.0.0.1",\n          "port": 22,\n          "username": "YourUsername",\n          "password": "yourPassword",\n          "filePath": "/Users/YourUsername/rocketmqconnect/sftp-test/sink.txt",\n          "connect.topicnames": "sftpTopic",\n          "fieldSeparator": "|",\n          "fieldSchema": "username|idCardNo|orderNo|orderAmount|trxDate|trxTime|profit"\n        }\'\n')),(0,r.kt)("p",null,"curl\u8bf7\u6c42\u8fd4\u56destatus:200\u5219\u8868\u793a\u521b\u5efa\u6210\u529f\uff0c\u8fd4\u56de\u6837\u4f8b\uff1a"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},'{"status":200,"body":{"connector.class":"...')),(0,r.kt)("p",null,"\u770b\u5230\u4ee5\u4e0b\u65e5\u5fd7\u8bf4\u660e file source connector \u542f\u52a8\u6210\u529f\u4e86"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"tail -100f ~/logs/rocketmqconnect/connect_runtime.log\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Start connector SftpSinkConnector and set target state STARTED successed!!")),(0,r.kt)("p",null,"\u67e5\u770bsink connector\u662f\u5426\u5c06\u6570\u636e\u5199\u5165\u4e86\u76ee\u7684\u7aef\u6587\u4ef6\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"cat /Users/YourUsername/rocketmqconnect/sftp-test/sink.txt\n")),(0,r.kt)("p",null,"\u5982\u679c\u751f\u6210\u4e86 sink.txt \u6587\u4ef6\uff0c\u5e76\u4e14\u4e0e source.txt \u5185\u5bb9\u4e00\u6837\u5219\u8bf4\u660e\u6574\u4e2a\u6d41\u7a0b\u6b63\u5e38\u8fd0\u884c\u3002"),(0,r.kt)("p",null,"\u7ee7\u7eed\u5411\u6e90\u7aef\u6587\u4ef6 source.txt \u4e2d\u5199\u5165\u6d4b\u8bd5\u6570\u636e\uff0c"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"cd /Users/YourUsername/rocketmqconnect/sftp-test/\n\necho '\u5f20\u4e09x|100000202211290001|20221129001|30000.00|2022-11-28|03:00:00|7.00\n\u674e\u56dbx|100000202211290002|20221129002|40000.00|2022-11-28|04:00:00|9.00\n\u8d75\u4e94x|100000202211290003|20221129003|50000.00|2022-11-28|05:00:00|12.00' >> source.txt\n\n# Wait a few seconds, check if rocketmq-connect replicate data to sink file succeed \nsleep 10\ncat /Users/YourUsername/rocketmqconnect/sftp-test/sink.txt\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u6ce8\u610f"),"\uff1a\u6587\u4ef6\u5185\u5bb9\u53ef\u80fd\u987a\u5e8f\u4e0d\u4e00\u6837\uff0c\u8fd9\u662f\u56e0\u4e3a",(0,r.kt)("inlineCode",{parentName:"p"},"rocketmq-connect-sftp"),"\u5411RocketMQ Topic\u4e2d\u6536\u53d1\u6d88\u606f\u65f6\uff0c\u4f7f\u7528\u7684\u6d88\u606f\u7c7b\u578b\u662f\u666e\u901a\u6d88\u606f\uff0c\u533a\u522b\u4e8e\u987a\u5e8f\u6d88\u606f\uff0c\u6d88\u8d39\u666e\u901a\u6d88\u606f\u65f6\u662f\u4e0d\u4fdd\u8bc1\u987a\u5e8f\u7684\u3002"))}i.isMDXComponent=!0}}]);
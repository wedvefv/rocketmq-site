"use strict";(self.webpackChunkrocketmq_docs=self.webpackChunkrocketmq_docs||[]).push([[2632],{3905:(e,t,s)=>{s.d(t,{Zo:()=>u,kt:()=>g});var n=s(67294);function o(e,t,s){return t in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s,e}function i(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),s.push.apply(s,n)}return s}function r(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?i(Object(s),!0).forEach((function(t){o(e,t,s[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):i(Object(s)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))}))}return e}function a(e,t){if(null==e)return{};var s,n,o=function(e,t){if(null==e)return{};var s,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)s=i[n],t.indexOf(s)>=0||(o[s]=e[s]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)s=i[n],t.indexOf(s)>=0||Object.prototype.propertyIsEnumerable.call(e,s)&&(o[s]=e[s])}return o}var c=n.createContext({}),p=function(e){var t=n.useContext(c),s=t;return e&&(s="function"==typeof e?e(t):r(r({},t),e)),s},u=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},l="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},b=n.forwardRef((function(e,t){var s=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),l=p(s),b=o,g=l["".concat(c,".").concat(b)]||l[b]||m[b]||i;return s?n.createElement(g,r(r({ref:t},u),{},{components:s})):n.createElement(g,r({ref:t},u))}));function g(e,t){var s=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=s.length,r=new Array(i);r[0]=b;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a[l]="string"==typeof e?e:o,r[1]=a;for(var p=2;p<i;p++)r[p]=s[p];return n.createElement.apply(null,r)}return n.createElement.apply(null,s)}b.displayName="MDXCreateElement"},97225:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>m,frontMatter:()=>i,metadata:()=>a,toc:()=>p});var n=s(87462),o=(s(67294),s(3905));const i={},r="Consistent Subscription Relationship",a={unversionedId:"bestPractice/07subscribe",id:"bestPractice/07subscribe",title:"Consistent Subscription Relationship",description:"Introduction",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/05-bestPractice/07subscribe.md",sourceDirName:"05-bestPractice",slug:"/bestPractice/07subscribe",permalink:"/docs/4.x/bestPractice/07subscribe",draft:!1,editUrl:"https://github.com/apache/rocketmq-site/tree/new-official-website/docs/05-bestPractice/07subscribe.md",tags:[],version:"current",frontMatter:{},sidebar:"myAutogeneratedSidebar",previous:{title:"Logging Confituration",permalink:"/docs/4.x/bestPractice/06log"},next:{title:"FAQs",permalink:"/docs/4.x/bestPractice/08FAQ"}},c={},p=[{value:"Introduction",id:"introduction",level:2},{value:"1  Examples of correct subscription relationships",id:"1--examples-of-correct-subscription-relationships",level:2},{value:"1.1 Subscribe to a Topic and subscribe to a Tag",id:"11-subscribe-to-a-topic-and-subscribe-to-a-tag",level:3},{value:"1.2 Subscribe to a Topic and subscribe to multiple Tags",id:"12-subscribe-to-a-topic-and-subscribe-to-multiple-tags",level:3},{value:"1.3 Subscribe to multiple Topics and subscribe to multiple Tags",id:"13-subscribe-to-multiple-topics-and-subscribe-to-multiple-tags",level:3},{value:"2 Troubleshooting inconsistent subscription relationships",id:"2-troubleshooting-inconsistent-subscription-relationships",level:2},{value:"3 Common issues with inconsistent subscription relationships",id:"3-common-issues-with-inconsistent-subscription-relationships",level:2},{value:"3.1  Consumer instances with the same Group ID subscribe to different Topics",id:"31--consumer-instances-with-the-same-group-id-subscribe-to-different-topics",level:3},{value:"3.2 Consumer instances with the same Group ID subscribe to the same Topic, but their subscriptions to the Tag are different",id:"32-consumer-instances-with-the-same-group-id-subscribe-to-the-same-topic-but-their-subscriptions-to-the-tag-are-different",level:3}],u={toc:p},l="wrapper";function m(e){let{components:t,...i}=e;return(0,o.kt)(l,(0,n.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"consistent-subscription-relationship"},"Consistent Subscription Relationship"),(0,o.kt)("h2",{id:"introduction"},"Introduction"),(0,o.kt)("p",null,"Subscription relationship: a consumer group subscribes to a particular Tag of a Topic, this record is called a subscription relationship."),(0,o.kt)("p",null,"Consistent subscription relationship: all consumer instances in the same consumer group must have the exact same subscription to the Topic and Tag. If the subscription relationship (consumer group name-Topic-Tag) is not consistent, it can cause confusion when consuming messages and may even result in message loss."),(0,o.kt)("h2",{id:"1--examples-of-correct-subscription-relationships"},"1  Examples of correct subscription relationships"),(0,o.kt)("h3",{id:"11-subscribe-to-a-topic-and-subscribe-to-a-tag"},"1.1 Subscribe to a Topic and subscribe to a Tag"),(0,o.kt)("p",null,"As shown in the following figure, three Consumer instances C1, C2, and C3 in the same Group ID have all subscribed to TopicA, and the Tag of their subscription to TopicA is also Tag1, which conforms to the principle of consistent subscription."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"1658453577894-0e64b114-cb4a-4220-a09a-62bc1f2943c6",src:s(93447).Z,width:"662",height:"482"})),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Correct example code 1:")),(0,o.kt)("p",null,"The subscription relationships of C1, C2, and C3 are consistent, meaning the code for subscribing to messages for C1, C2, and C3 must be exactly the same, and the code example is as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'    Properties properties = new Properties();\n    properties.put(PropertyKeyConst.GROUP_ID, "GID_test_1");\n    Consumer consumer = ONSFactory.createConsumer(properties);\n    consumer.subscribe("TopicA", "Tag1", new MessageListener() {\n        public Action consume(Message message, ConsumeContext context) {\n            System.out.println(message.getMsgID());\n            return Action.CommitMessage;\n        }\n    }); \n')),(0,o.kt)("h3",{id:"12-subscribe-to-a-topic-and-subscribe-to-multiple-tags"},"1.2 Subscribe to a Topic and subscribe to multiple Tags"),(0,o.kt)("p",null,"As shown in the following figure, the three Consumer instances C1, C2, and C3 in the same Group ID have all subscribed to TopicB and have subscribed to Tag2 and Tag3 for TopicB, which means they have subscribed to all messages in TopicB with Tag2 or Tag3, and the order is consistent as Tag2||Tag3, meeting the principle of subscription relationship consistency."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"1658453865541-118b0cd0-d597-4a76-9561-ae765540567c",src:s(45214).Z,width:"857",height:"610"})),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Correct  example code 2:")),(0,o.kt)("p",null,"The subscription relationships of C1, C2, and C3 are consistent, meaning the code for subscribing to messages for C1, C2, and C3 must be exactly the same, and the code example is as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'    Properties properties = new Properties();\n    properties.put(PropertyKeyConst.GROUP_ID, "GID_test_2");\n    Consumer consumer = ONSFactory.createConsumer(properties);\n    consumer.subscribe("TopicB", "Tag2||Tag3", new MessageListener() {\n        public Action consume(Message message, ConsumeContext context) {\n            System.out.println(message.getMsgID());\n            return Action.CommitMessage;\n        }\n    });   \n')),(0,o.kt)("h3",{id:"13-subscribe-to-multiple-topics-and-subscribe-to-multiple-tags"},"1.3 Subscribe to multiple Topics and subscribe to multiple Tags"),(0,o.kt)("p",null,"As shown in the following figure, the three Consumer instances C1, C2, and C3 in the same Group ID have all subscribed to TopicA and TopicB, and their subscription to TopicA does not specify any Tag, which means they subscribe to all messages in TopicA, and their subscription to TopicB's Tag is Tag1 and Tag2, which means they subscribe to all messages in TopicB with Tag1 or Tag2, and the order is consistent as Tag1||Tag2, meeting the principle of subscription relationship consistency."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"1658454292557-c07fa0ac-81be-4aac-9c5b-342821c554a6",src:s(6804).Z,width:"868",height:"616"})),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Correct example code 3:")),(0,o.kt)("p",null,"The subscription relationships of C1, C2, and C3 are consistent, meaning the code for subscribing to messages for C1, C2, and C3 must be exactly the same, and the code example is as follows\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'    Properties properties = new Properties();\n    properties.put(PropertyKeyConst.GROUP_ID, "GID_test_3");\n    Consumer consumer = ONSFactory.createConsumer(properties);\n    consumer.subscribe("TopicA", "*", new MessageListener() {\n        public Action consume(Message message, ConsumeContext context) {\n            System.out.println(message.getMsgID());\n            return Action.CommitMessage;\n        }\n    });     \n    consumer.subscribe("TopicB", "Tag2||Tag3", new MessageListener() {\n        public Action consume(Message message, ConsumeContext context) {\n            System.out.println(message.getMsgID());\n            return Action.CommitMessage;\n        }\n    });   \n')),(0,o.kt)("h2",{id:"2-troubleshooting-inconsistent-subscription-relationships"},"2 Troubleshooting inconsistent subscription relationships"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Problem description")),(0,o.kt)("p",null,"When using the RocketMQ version of the message queue, it is possible to have inconsistent subscription relationships. The specific problems are as follows:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The consistency of subscription relationships in the RocketMQ version of the message queue console is displayed as no."),(0,o.kt)("li",{parentName:"ul"},"Consumer instances do not receive subscribed messages.")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Please refer to the following steps for checking")),(0,o.kt)("p",null,"You can check the consistency of the subscription relationship of the specified Group on the Group Details page of the RocketMQ version of the message queue console. If the query result is inconsistent, please refer to section 3 of this article to troubleshoot the consumption code of the Consumer instance."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Check the configuration code related to subscription in your Consumer instance to ensure that all Consumer instances with the same Group ID subscribe to the same Topic and Tag."),(0,o.kt)("li",{parentName:"ol"},"Restart the client application."),(0,o.kt)("li",{parentName:"ol"},"Log in to the ",(0,o.kt)("a",{parentName:"li",href:"https://ons.console.aliyun.com/"},"RocketMQ version of the message queue console")," and click the instance list in the left navigation bar. Select your target instance and enter the instance details page."),(0,o.kt)("li",{parentName:"ol"},"Click Group Management in the left navigation bar, select the corresponding protocol, and then click Consumer Status to confirm that the consistency of the subscription relationship is displayed as Yes."),(0,o.kt)("li",{parentName:"ol"},"Test and confirm that the message can be consumed by the expected consumer instance.")),(0,o.kt)("h2",{id:"3-common-issues-with-inconsistent-subscription-relationships"},"3 Common issues with inconsistent subscription relationships"),(0,o.kt)("h3",{id:"31--consumer-instances-with-the-same-group-id-subscribe-to-different-topics"},"3.1  Consumer instances with the same Group ID subscribe to different Topics"),(0,o.kt)("p",null,"As shown in the following figure, the three Consumer instances C1, C2, and C3 in the same Group ID have subscribed to TopicA, TopicB, and TopicC, respectively, and their subscriptions to the Topics are not the same, which does not meet the principle of subscription relationship consistency."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"image-20220722102131073",src:s(87394).Z,width:"881",height:"621"})),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Error example code 1")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Consumer example 1-1\uff1a"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-java"},'    Properties properties = new Properties();\n    properties.put(PropertyKeyConst.GROUP_ID, "GID_test_1");\n    Consumer consumer = ONSFactory.createConsumer(properties);\n    consumer.subscribe("TopicA", "*", new MessageListener() {\n        public Action consume(Message message, ConsumeContext context) {\n            System.out.println(message.getMsgID());\n            return Action.CommitMessage;\n        }\n    });\n'))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Consumer example 1-2\uff1a"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-java"},'Properties properties = new Properties();\n    properties.put(PropertyKeyConst.GROUP_ID, "GID_test_1");\n    Consumer consumer = ONSFactory.createConsumer(properties);\n    consumer.subscribe("TopicB", "*", new MessageListener() {\n        public Action consume(Message message, ConsumeContext context) {\n            System.out.println(message.getMsgID());\n            return Action.CommitMessage;\n        }\n    });\n'))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Consumer example 1-3\uff1a"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-java"},'    Properties properties = new Properties();\n    properties.put(PropertyKeyConst.GROUP_ID, "GID_test_1");\n    Consumer consumer = ONSFactory.createConsumer(properties);\n    consumer.subscribe("TopicC", "*", new MessageListener() {\n        public Action consume(Message message, ConsumeContext context) {\n            System.out.println(message.getMsgID());\n            return Action.CommitMessage;\n        }\n    });\n')))),(0,o.kt)("h3",{id:"32-consumer-instances-with-the-same-group-id-subscribe-to-the-same-topic-but-their-subscriptions-to-the-tag-are-different"},"3.2 Consumer instances with the same Group ID subscribe to the same Topic, but their subscriptions to the Tag are different"),(0,o.kt)("p",null,"As shown in the following figure, the three Consumer instances C1, C2, and C3 in the same Group ID have all subscribed to TopicA, but C1 subscribes to Tag1 for TopicA, C2 and C3 subscribe to Tag2 for TopicA, and the subscriptions to the same Topic's Tag are not the same, which does not meet the principle of subscription relationship consistency."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"image-20220722102926055",src:s(77850).Z,width:"867",height:"608"})),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Error example code 2")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Consumer example  2-1\uff1a"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-java"},'    Properties properties = new Properties();\n    properties.put(PropertyKeyConst.GROUP_ID, "GID_test_2");\n    Consumer consumer = ONSFactory.createConsumer(properties);\n    consumer.subscribe("TopicA", "Tag1", new MessageListener() {\n        public Action consume(Message message, ConsumeContext context) {\n            System.out.println(message.getMsgID());\n            return Action.CommitMessage;\n        }\n    });  \n')))),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Consumer example  2-2\uff1a"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-java"},'    Properties properties = new Properties();\n    properties.put(PropertyKeyConst.GROUP_ID, "GID_test_2");\n    Consumer consumer = ONSFactory.createConsumer(properties);\n    consumer.subscribe("TopicA", "Tag2", new MessageListener() {\n        public Action consume(Message message, ConsumeContext context) {\n            System.out.println(message.getMsgID());\n            return Action.CommitMessage;\n        }\n    });  \n'))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Consumer example  2-3\uff1a"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-java"},'    Properties properties = new Properties();\n    properties.put(PropertyKeyConst.GROUP_ID, "GID_test_2");\n    Consumer consumer = ONSFactory.createConsumer(properties);\n    consumer.subscribe("TopicA", "Tag2", new MessageListener() {\n        public Action consume(Message message, ConsumeContext context) {\n            System.out.println(message.getMsgID());\n            return Action.CommitMessage;\n        }\n    });  \n')))))}m.isMDXComponent=!0},93447:(e,t,s)=>{s.d(t,{Z:()=>n});const n=s.p+"assets/images/4.x\u8ba2\u9605\u5173\u7cfb\u4e00\u81f4-1-4cbab04c03d85562d7d144edfeb86aa6.jpeg"},45214:(e,t,s)=>{s.d(t,{Z:()=>n});const n=s.p+"assets/images/4.x\u8ba2\u9605\u5173\u7cfb\u4e00\u81f4-2-4ea9614e13393725496776d2a5668b43.jpeg"},6804:(e,t,s)=>{s.d(t,{Z:()=>n});const n=s.p+"assets/images/4.x\u8ba2\u9605\u5173\u7cfb\u4e00\u81f4-3-085b3104a879045cd04b876911351e21.jpeg"},87394:(e,t,s)=>{s.d(t,{Z:()=>n});const n=s.p+"assets/images/4.x\u8ba2\u9605\u5173\u7cfb\u4e00\u81f4-4-41010fd8c9c21c928807228caaf2d621.jpeg"},77850:(e,t,s)=>{s.d(t,{Z:()=>n});const n=s.p+"assets/images/4.x\u8ba2\u9605\u5173\u7cfb\u4e00\u81f4-5-514888130c9907fb857a159181ff71cc.jpeg"}}]);
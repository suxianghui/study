# Diff DOM
 
  ![cmd-markdown-Tree DIFF](https://img-blog.csdn.net/20180717182348969)

  DIFF算法在执行时有三个维度，分别是Tree DIFF、Component DIFF和Element DIFF，执行时按顺序依次执行，它们的差异仅仅因为DIFF粒度不同、执行先后顺序不同。 
  ![cmd-markdown-Tree DIFF](https://img-blog.csdn.net/2018071718264787)
   
 
  Tree DIFF是对树的每一层进行遍历，如果某组件不存在了，则会直接销毁。如图所示，左边是旧属，右边是新属，第一层是R组件，一模一样，不会发生变化；第二层进入Component DIFF，同一类型组件继续比较下去，发现A组件没有，所以直接删掉A、B、C组件；继续第三层，重新创建A、B、C组件。 
  ![cmd-markdown-Tree DIFF](https://img-blog.csdn.net/20180717182802621)
  
  如图所示，第一层遍历完，进行第二层遍历时，D和G组件是不同类型的组件，不同类型组件直接进行替换，将D删掉，再将G重建。

   ![cmd-markdown-Tree DIFF](https://img-blog.csdn.net/20180717182842111) 

  Element DIFF紧接着以上统一类型组件继续比较下去，常见类型就是列表。同一个列表由旧变新有三种行为，插入、移动和删除，它的比较策略是对于每一个列表指定key，先将所有列表遍历一遍，确定要新增和删除的，再确定需要移动的。如图所示，第一步将D删掉，第二步增加E，再次执行时A和B只需要移动位置即可。

  例:
  
    1.请用递归的方式遍历树形数据结构中的每一个节点

      解:
         <div class="box">
         </div>
         <script>
             var b = document.querySelector('.box')
             const options = [
                 {
                     value: 'zhejiang',
                     label: 'Zhejiang',
                     children: [
                         {
                             value: 'hangzhou',
                             label: 'Hangzhou',
                             children: [
                                 {
                                     value: 'xihu',
                                     label: 'West Lake'
                                 }
                             ]
                         }
                     ]
                 },
                 {
                     value: 'jiangsu',
                     label: 'Jiangsu',
                     children: [
                         {
                             value: 'nanjing',
                             label: 'Nanjing',
                             children: [
                                 {
                                     value: 'zhonghuamen',
                                     label: 'Zhong Hua Men'
                                 }
                             ]
                         }
                     ]
                 }
             ];
             var adds =[]
             function add(options){
               options.forEach((i,v)=>{
                 adds.push(i)
                 if(i.children){
                   add(i.children)
                 }
               })
               var num=[]
               num.push(adds)
             }
             add(options)
             console.log(adds)
             adds.forEach((v,i)=>{
               var a = document.createElement('p');
               a.innerHTML=v.value
               b.appendChild(a)
               console.log(a)
             })
         </script>



      2.将类似以下JSON表示的树状结构(可以无限层级)通过parseDOM函数(使用document.createElement,
       document.createTextNode,appendChild等方法)生成一颗DOM树(返回一个element元素)

       解:
          <div class='b'></div>
          <script>
              var b = document.querySelector('.b')
              const jsonTree = [{
                  "tagName": "ul",
                  "props": {
                      "className": "list",
                      "data-name": "jsontree"
                  }
              },
              {
                  "tagName": "a",
                  "props": {
                      "href": "https://www.aliyun.com",
                      "target": "_blank"
                  },
                  "children": "阿里云"
              }];
              function parseDOM(add) {
                  console.log(add)
                  add.forEach(v=>{
                     var a = document.createElement(v.tagName)
                     if(typeof(v.children) === 'string' ){
                         a.innerHTML = v.children
                     }else if(typeof(v.children) === 'Array'){
                         parseDOM(v.children)
                     }
                     if(v.props){
                         for(var i in v.props){
                             a[i] = v.props[i]
                         }
                     }
                     document.body.appendChild(a)
                  })
              }
              parseDOM(jsonTree)
          </script>
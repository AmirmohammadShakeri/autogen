"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3159],{49042:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>r,contentTitle:()=>l,default:()=>h,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var s=t(85893),c=t(11151);const i={sidebar_label:"chromadb",title:"agentchat.contrib.vectordb.chromadb"},l=void 0,o={id:"reference/agentchat/contrib/vectordb/chromadb",title:"agentchat.contrib.vectordb.chromadb",description:"ChromaVectorDB",source:"@site/docs/reference/agentchat/contrib/vectordb/chromadb.md",sourceDirName:"reference/agentchat/contrib/vectordb",slug:"/reference/agentchat/contrib/vectordb/chromadb",permalink:"/autogen/docs/reference/agentchat/contrib/vectordb/chromadb",draft:!1,unlisted:!1,editUrl:"https://github.com/microsoft/autogen/edit/main/website/docs/reference/agentchat/contrib/vectordb/chromadb.md",tags:[],version:"current",frontMatter:{sidebar_label:"chromadb",title:"agentchat.contrib.vectordb.chromadb"},sidebar:"referenceSideBar",previous:{title:"base",permalink:"/autogen/docs/reference/agentchat/contrib/vectordb/base"},next:{title:"utils",permalink:"/autogen/docs/reference/agentchat/contrib/vectordb/utils"}},r={},d=[{value:"ChromaVectorDB",id:"chromavectordb",level:2},{value:"__init__",id:"__init__",level:3},{value:"create_collection",id:"create_collection",level:3},{value:"get_collection",id:"get_collection",level:3},{value:"delete_collection",id:"delete_collection",level:3},{value:"insert_docs",id:"insert_docs",level:3},{value:"update_docs",id:"update_docs",level:3},{value:"delete_docs",id:"delete_docs",level:3},{value:"retrieve_docs",id:"retrieve_docs",level:3},{value:"get_docs_by_ids",id:"get_docs_by_ids",level:3}];function a(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,c.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"chromavectordb",children:"ChromaVectorDB"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"class ChromaVectorDB(VectorDB)\n"})}),"\n",(0,s.jsx)(n.p,{children:"A vector database that uses ChromaDB as the backend."}),"\n",(0,s.jsx)(n.h3,{id:"__init__",children:"__init__"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"def __init__(*,\n             client=None,\n             path: str = None,\n             embedding_function: Callable = None,\n             metadata: dict = None,\n             **kwargs) -> None\n"})}),"\n",(0,s.jsx)(n.p,{children:"Initialize the vector database."}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Arguments"}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"client"})," - chromadb.Client | The client object of the vector database. Default is None.\nIf provided, it will use the client object directly and ignore other arguments."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"path"})," - str | The path to the vector database. Default is None."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"embedding_function"}),' - Callable | The embedding function used to generate the vector representation\nof the documents. Default is None, SentenceTransformerEmbeddingFunction("all-MiniLM-L6-v2") will be used.']}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"metadata"})," - dict | The metadata of the vector database. Default is None. If None, it will use this"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"setting"}),' - {"hnsw:space": "ip", "hnsw:construction_ef": 30, "hnsw:M": 32}. For more details of\nthe metadata, please refer to ',(0,s.jsx)(n.a,{href:"https://github.com/nmslib/hnswlib#supported-distances",children:"distances"}),",\n",(0,s.jsx)(n.a,{href:"https://github.com/chroma-core/chroma/blob/566bc80f6c8ee29f7d99b6322654f32183c368c4/chromadb/segment/impl/vector/local_hnsw.py#L184",children:"hnsw"}),",\nand ",(0,s.jsx)(n.a,{href:"https://github.com/nmslib/hnswlib/blob/master/ALGO_PARAMS.md",children:"ALGO_PARAMS"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"kwargs"})," - dict | Additional keyword arguments."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Returns"}),":"]}),"\n",(0,s.jsx)(n.p,{children:"None"}),"\n",(0,s.jsx)(n.h3,{id:"create_collection",children:"create_collection"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"def create_collection(collection_name: str,\n                      overwrite: bool = False,\n                      get_or_create: bool = True) -> Collection\n"})}),"\n",(0,s.jsx)(n.p,{children:"Create a collection in the vector database.\nCase 1. if the collection does not exist, create the collection.\nCase 2. the collection exists, if overwrite is True, it will overwrite the collection.\nCase 3. the collection exists and overwrite is False, if get_or_create is True, it will get the collection,\notherwise it raise a ValueError."}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Arguments"}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"collection_name"})," - str | The name of the collection."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"overwrite"})," - bool | Whether to overwrite the collection if it exists. Default is False."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"get_or_create"})," - bool | Whether to get the collection if it exists. Default is True."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Returns"}),":"]}),"\n",(0,s.jsx)(n.p,{children:"Collection | The collection object."}),"\n",(0,s.jsx)(n.h3,{id:"get_collection",children:"get_collection"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"def get_collection(collection_name: str = None) -> Collection\n"})}),"\n",(0,s.jsx)(n.p,{children:"Get the collection from the vector database."}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Arguments"}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"collection_name"})," - str | The name of the collection. Default is None. If None, return the\ncurrent active collection."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Returns"}),":"]}),"\n",(0,s.jsx)(n.p,{children:"Collection | The collection object."}),"\n",(0,s.jsx)(n.h3,{id:"delete_collection",children:"delete_collection"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"def delete_collection(collection_name: str) -> None\n"})}),"\n",(0,s.jsx)(n.p,{children:"Delete the collection from the vector database."}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Arguments"}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"collection_name"})," - str | The name of the collection."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Returns"}),":"]}),"\n",(0,s.jsx)(n.p,{children:"None"}),"\n",(0,s.jsx)(n.h3,{id:"insert_docs",children:"insert_docs"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"def insert_docs(docs: List[Document],\n                collection_name: str = None,\n                upsert: bool = False) -> None\n"})}),"\n",(0,s.jsx)(n.p,{children:"Insert documents into the collection of the vector database."}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Arguments"}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"docs"})," - List[Document] | A list of documents. Each document is a TypedDict ",(0,s.jsx)(n.code,{children:"Document"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"collection_name"})," - str | The name of the collection. Default is None."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"upsert"})," - bool | Whether to update the document if it exists. Default is False."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"kwargs"})," - Dict | Additional keyword arguments."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Returns"}),":"]}),"\n",(0,s.jsx)(n.p,{children:"None"}),"\n",(0,s.jsx)(n.h3,{id:"update_docs",children:"update_docs"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"def update_docs(docs: List[Document], collection_name: str = None) -> None\n"})}),"\n",(0,s.jsx)(n.p,{children:"Update documents in the collection of the vector database."}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Arguments"}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"docs"})," - List[Document] | A list of documents."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"collection_name"})," - str | The name of the collection. Default is None."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Returns"}),":"]}),"\n",(0,s.jsx)(n.p,{children:"None"}),"\n",(0,s.jsx)(n.h3,{id:"delete_docs",children:"delete_docs"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"def delete_docs(ids: List[ItemID],\n                collection_name: str = None,\n                **kwargs) -> None\n"})}),"\n",(0,s.jsx)(n.p,{children:"Delete documents from the collection of the vector database."}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Arguments"}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"ids"})," - List[ItemID] | A list of document ids. Each id is a typed ",(0,s.jsx)(n.code,{children:"ItemID"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"collection_name"})," - str | The name of the collection. Default is None."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"kwargs"})," - Dict | Additional keyword arguments."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Returns"}),":"]}),"\n",(0,s.jsx)(n.p,{children:"None"}),"\n",(0,s.jsx)(n.h3,{id:"retrieve_docs",children:"retrieve_docs"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"def retrieve_docs(queries: List[str],\n                  collection_name: str = None,\n                  n_results: int = 10,\n                  distance_threshold: float = -1,\n                  **kwargs) -> QueryResults\n"})}),"\n",(0,s.jsx)(n.p,{children:"Retrieve documents from the collection of the vector database based on the queries."}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Arguments"}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"queries"})," - List[str] | A list of queries. Each query is a string."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"collection_name"})," - str | The name of the collection. Default is None."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"n_results"})," - int | The number of relevant documents to return. Default is 10."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"distance_threshold"})," - float | The threshold for the distance score, only distance smaller than it will be\nreturned. Don't filter with it if < 0. Default is -1."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"kwargs"})," - Dict | Additional keyword arguments."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Returns"}),":"]}),"\n",(0,s.jsx)(n.p,{children:"QueryResults | The query results. Each query result is a list of list of tuples containing the document and\nthe distance."}),"\n",(0,s.jsx)(n.h3,{id:"get_docs_by_ids",children:"get_docs_by_ids"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"def get_docs_by_ids(ids: List[ItemID] = None,\n                    collection_name: str = None,\n                    include=None,\n                    **kwargs) -> List[Document]\n"})}),"\n",(0,s.jsx)(n.p,{children:"Retrieve documents from the collection of the vector database based on the ids."}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Arguments"}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"ids"})," - List[ItemID] | A list of document ids. If None, will return all the documents. Default is None."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"collection_name"})," - str | The name of the collection. Default is None."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"include"}),' - List[str] | The fields to include. Default is None.\nIf None, will include ["metadatas", "documents"], ids will always be included.']}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"kwargs"})," - dict | Additional keyword arguments."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Returns"}),":"]}),"\n",(0,s.jsx)(n.p,{children:"List[Document] | The results."})]})}function h(e={}){const{wrapper:n}={...(0,c.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>o,a:()=>l});var s=t(67294);const c={},i=s.createContext(c);function l(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:l(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);
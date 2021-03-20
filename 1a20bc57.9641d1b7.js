(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{143:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return b}));var i=n(2),a=n(9),r=(n(0),n(163)),o={id:"cli",title:"Command Line Interface"},l={id:"cli",isDocsHomePage:!1,title:"Command Line Interface",description:"Skyline is launched from the command line using the skyline command. Its",source:"@site/docs/cli.md",permalink:"/project-website-template/docs/cli",editUrl:"https://github.com/skylineprof/skyline/edit/master/website/docs/cli.md",sidebar:"sidebar",previous:{title:"Standalone Profiling",permalink:"/project-website-template/docs/standalone"},next:{title:"Settings",permalink:"/project-website-template/docs/settings"}},c=[{value:"Command Line Flags",id:"command-line-flags",children:[]},{value:"Shared Optional Arguments",id:"shared-optional-arguments",children:[]},{value:"Subcommands",id:"subcommands",children:[{value:"Interactive Profiling",id:"interactive-profiling",children:[]},{value:"Memory Profiling",id:"memory-profiling",children:[]},{value:"Run Time Profiling",id:"run-time-profiling",children:[]}]}],p={rightToc:c};function b(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(r.b)("wrapper",Object(i.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Skyline is launched from the command line using the ",Object(r.b)("inlineCode",{parentName:"p"},"skyline")," command. Its\nfunctionality is activated through its subcommands:\n",Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"#interactive-profiling"}),Object(r.b)("inlineCode",{parentName:"a"},"interactive")),", ",Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"#memory-profiling"}),Object(r.b)("inlineCode",{parentName:"a"},"memory")),", and\n",Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"#run-time-profiling"}),Object(r.b)("inlineCode",{parentName:"a"},"time")),"."),Object(r.b)("h3",{id:"command-line-flags"},"Command Line Flags"),Object(r.b)("h5",{id:"-v-and---version"},Object(r.b)("inlineCode",{parentName:"h5"},"-v")," and ",Object(r.b)("inlineCode",{parentName:"h5"},"--version")),Object(r.b)("p",null,"Use these flags to have Skyline print out its version."),Object(r.b)("h5",{id:"-h-and---help"},Object(r.b)("inlineCode",{parentName:"h5"},"-h")," and ",Object(r.b)("inlineCode",{parentName:"h5"},"--help")),Object(r.b)("p",null,"Use these flags to have Skyline print out information about its command line\nusage."),Object(r.b)("h3",{id:"shared-optional-arguments"},"Shared Optional Arguments"),Object(r.b)("p",null,"The following command line arguments can be used with all of Skyline's\nsubcommands."),Object(r.b)("h5",{id:"--log-filefile"},Object(r.b)("inlineCode",{parentName:"h5"},"--log-file=<file>")),Object(r.b)("p",null,"Use this argument if you would like Skyline to write its logs to a separate\nfile."),Object(r.b)("h5",{id:"--debug"},Object(r.b)("inlineCode",{parentName:"h5"},"--debug")),Object(r.b)("p",null,"Set this command line flag to have Skyline print out more verbose logs. This is\nuseful primarily for debugging."),Object(r.b)("hr",null),Object(r.b)("h2",{id:"subcommands"},"Subcommands"),Object(r.b)("h3",{id:"interactive-profiling"},"Interactive Profiling"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Usage:")," ",Object(r.b)("inlineCode",{parentName:"p"},"skyline interactive path/to/entry_point.py")),Object(r.b)("p",null,"To launch an interactive profiling session, you will need to use the ",Object(r.b)("inlineCode",{parentName:"p"},"skyline\ninteractive")," command. You need to specify the relative path to your project's\nentry point file. This command will launch the Skyline profiling daemon and\nwill start Atom for you automatically."),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",Object(i.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(i.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(i.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(i.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(r.b)("div",Object(i.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"Before running ",Object(r.b)("inlineCode",{parentName:"p"},"skyline interactive")," you need to navigate to your project's\nroot directory."))),Object(r.b)("h4",{id:"optional-arguments"},"Optional Arguments"),Object(r.b)("h5",{id:"--skip-atom"},Object(r.b)("inlineCode",{parentName:"h5"},"--skip-atom")),Object(r.b)("p",null,"Set this command line flag"),Object(r.b)("h5",{id:"--hosthost-name-and---portport"},Object(r.b)("inlineCode",{parentName:"h5"},"--host=<host name>")," and ",Object(r.b)("inlineCode",{parentName:"h5"},"--port=<port>")),Object(r.b)("p",null,"Use these arguments to have the Skyline daemon bind to a custom host name\nand/or listen on a custom port. By default Skyline will bind to all network\ninterfaces and will listen on port 60120."),Object(r.b)("p",null,"Usually you do not need to set a custom host name nor port. These arguments are\nuseful if you need to run multiple Skyline daemon processes, or if, due to a\nfirewall, you need to have Skyline listen on a different port."),Object(r.b)("h3",{id:"memory-profiling"},"Memory Profiling"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Usage:")," ",Object(r.b)("inlineCode",{parentName:"p"},"skyline memory --output results.sqlite path/to/entry_point.py")),Object(r.b)("p",null,"Use the ",Object(r.b)("inlineCode",{parentName:"p"},"memory")," subcommand to get a ",Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"/project-website-template/docs/memory-report"}),"memory usage report"),".\nThis allows you to get memory usage information without having to launch\nSkyline's interactive profiler (i.e. the Skyline Atom plugin)."),Object(r.b)("h4",{id:"required-arguments"},"Required Arguments"),Object(r.b)("h5",{id:"-o-or---output"},Object(r.b)("inlineCode",{parentName:"h5"},"-o")," or ",Object(r.b)("inlineCode",{parentName:"h5"},"--output")),Object(r.b)("p",null,"You need to specify the file where Skyline should save the memory report. This\noutput file will be a SQLite database."),Object(r.b)("h3",{id:"run-time-profiling"},"Run Time Profiling"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Usage:")," ",Object(r.b)("inlineCode",{parentName:"p"},"skyline time --output results.sqlite path/to/entry_point.py")),Object(r.b)("p",null,"Use the ",Object(r.b)("inlineCode",{parentName:"p"},"time")," subcommand to get a ",Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"/project-website-template/docs/run-time-report"}),"iteration run time\nreport"),". This allows you to get run time information\nwithout having to launch Skyline's interactive profiler (i.e. the Skyline Atom\nplugin)."),Object(r.b)("h4",{id:"required-arguments-1"},"Required Arguments"),Object(r.b)("h5",{id:"-o-or---output-1"},Object(r.b)("inlineCode",{parentName:"h5"},"-o")," or ",Object(r.b)("inlineCode",{parentName:"h5"},"--output")),Object(r.b)("p",null,"You need to specify the file where Skyline should save the run time report.\nThis output file will be a SQLite database."))}b.isMDXComponent=!0},163:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return d}));var i=n(0),a=n.n(i);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),b=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=b(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,o=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),s=b(n),u=i,d=s["".concat(o,".").concat(u)]||s[u]||m[u]||r;return n?a.a.createElement(d,l(l({ref:t},p),{},{components:n})):a.a.createElement(d,l({ref:t},p))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var p=2;p<r;p++)o[p]=n[p];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);
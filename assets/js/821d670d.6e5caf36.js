"use strict";(self.webpackChunk_xrengine_docs=self.webpackChunk_xrengine_docs||[]).push([[5441],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=i.createContext({}),u=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=u(e.components);return i.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=u(n),d=a,h=m["".concat(l,".").concat(d)]||m[d]||p[d]||o;return n?i.createElement(h,r(r({ref:t},c),{},{components:n})):i.createElement(h,r({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,r[1]=s;for(var u=2;u<o;u++)r[u]=n[u];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7191:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return c},default:function(){return m}});var i=n(7462),a=n(3366),o=(n(7294),n(3905)),r=["components"],s={id:"contributing",title:"Contributing Guidelines"},l=void 0,u={unversionedId:"contributing",id:"contributing",isDocsHomePage:!1,title:"Contributing Guidelines",description:"These guidelines were borrowed in large part from the IPFS community, who in turn borrowed much of this from Docker -- long live the permanent web! Long live containers!",source:"@site/docs/3_contributing.md",sourceDirName:".",slug:"/contributing",permalink:"/xrengine-docs/docs/contributing",editUrl:"https://github.com/XRFoundation/XREngine/packages/docs/docs/3_contributing.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{id:"contributing",title:"Contributing Guidelines"},sidebar:"sidebar",previous:{title:"Architecture Overview",permalink:"/xrengine-docs/docs/"}},c=[{value:"Topics",id:"topics",children:[]},{value:"Security Issues",id:"security-issues",children:[]},{value:"Community Guidelines",id:"community-guidelines",children:[]},{value:"Looking for ways to contribute?",id:"looking-for-ways-to-contribute",children:[{value:"Dive Right In",id:"dive-right-in",children:[]},{value:"Reporting Issues",id:"reporting-issues",children:[]},{value:"Community Tooling Improvement",id:"community-tooling-improvement",children:[]},{value:"Translations",id:"translations",children:[]},{value:"Helping in other ways",id:"helping-in-other-ways",children:[]}]},{value:"Code Contribution Guidelines",id:"code-contribution-guidelines",children:[{value:"Discuss big changes as Issues first",id:"discuss-big-changes-as-issues-first",children:[]},{value:"Pull Requests always welcome",id:"pull-requests-always-welcome",children:[]},{value:"Code",id:"code",children:[]},{value:"Tests",id:"tests",children:[]},{value:"Documentation",id:"documentation",children:[]},{value:"Pull Requests",id:"pull-requests",children:[]}]},{value:"Credits",id:"credits",children:[]}],p={toc:c};function m(e){var t=e.components,n=(0,a.Z)(e,r);return(0,o.kt)("wrapper",(0,i.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"These guidelines were borrowed in large part from the IPFS community, who in turn borrowed much of this from Docker -- long live the permanent web! Long live containers!")),(0,o.kt)("h1",{id:"contributing-guidelines"},"Contributing Guidelines"),(0,o.kt)("p",null,"Want to contribute? Awesome! There are many ways to help, from reporting issues, contributing code, and helping us improve our community. Here are instructions to get you started. They are not perfect yet. Please let us know what feels wrong or incomplete."),(0,o.kt)("h2",{id:"topics"},"Topics"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#security-issues"},(0,o.kt)("strong",{parentName:"a"},"Security Issues"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#community-guidelines"},(0,o.kt)("strong",{parentName:"a"},"Community Guidelines"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#looking-for-ways-to-contribute"},(0,o.kt)("strong",{parentName:"a"},"Looking for ways to contribute?")),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#dive-right-in"},"Dive Right In")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#reporting-issues"},"Reporting Issues")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#community-improvement"},"Community Improvement")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#translations"},"Translations")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#helping-in-other-ways"},"Helping in other ways")))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#protocol-specification"},(0,o.kt)("strong",{parentName:"a"},"Protocol Specification")),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#protocol-design"},"Protocol Design")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#implementation-design"},"Implementation Design")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#design-review"},"Design Review")))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#code-contribution-guidelines"},(0,o.kt)("strong",{parentName:"a"},"Code Contribution Guidelines")),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#discuss-big-changes-as-issues-first"},"Discuss big changes as Issues first")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#pull-requests-always-welcome"},"Pull Requests always welcome")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#conventions"},"Conventions"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#go"},"Go Code Contributing Guidelines")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#javascript"},"JavaScript Code Contributing Guidelines")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#git"},"Git")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#commit-messages"},"Commit messages")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#code"},"Code")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#tests"},"Tests")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#documentation"},"Documentation")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#pull-requests"},"Pull Requests")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#code-review"},"Code Review")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#rebasing"},"Rebasing")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#merge-approval"},"Merge Approval")))))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#credits"},"Credits"))),(0,o.kt)("h2",{id:"security-issues"},"Security Issues"),(0,o.kt)("p",null,"XREngine is still in heavy development. This means that there may be problems in our protocols, or there may be mistakes in our implementations. And -- though XREngine is not production-ready yet -- many people are already running nodes in their machines. So we take security vulnerabilities very seriously. If you discover a security issue, please bring it to our attention right away!"),(0,o.kt)("p",null,"If you find a vulnerability that may affect live deployments -- for example, expose a remote execution exploit -- please send your report privately to ",(0,o.kt)("a",{parentName:"p",href:"mailto:security@xrengine.io"},"security@xrengine.io"),", please DO NOT file a public issue."),(0,o.kt)("p",null,"If the issue is a protocol weakness or something not yet deployed, just discuss it openly."),(0,o.kt)("h2",{id:"community-guidelines"},"Community Guidelines"),(0,o.kt)("p",null,"We want to keep the XREngine community awesome, growing and collaborative. We need your help to keep it that way. Please review our ",(0,o.kt)("a",{parentName:"p",href:"code-of-conduct.md"},"code-of-conduct"),"."),(0,o.kt)("h2",{id:"looking-for-ways-to-contribute"},"Looking for ways to contribute?"),(0,o.kt)("h3",{id:"dive-right-in"},"Dive Right In"),(0,o.kt)("p",null,"If you're curious to hack on XREngine right now and you just need an issue to focus on, check out ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/search?q=label%3A%22help+wanted%22+user%3AXRFoundation+is%3Aopen&type=Issues"},"this search"),' for issues tagged as "help wanted". Generally, these should be easier for newcomers, and are great places to start hacking away. Have fun!'),(0,o.kt)("h3",{id:"reporting-issues"},"Reporting Issues"),(0,o.kt)("p",null,"If you find bugs, mistakes, inconsistencies in the project's code or documents, please let us know by filing an issue at the appropriate issue tracker (we use multiple repositories). No issue is too small."),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine"},"XREngine")," issues use a template that will guide you through the process of reporting a bug. We will be adding this kind of issue template to other repositories as bug reports become more common."),(0,o.kt)("p",null,"For all other questions/discussions, please find us on ",(0,o.kt)("a",{parentName:"p",href:"https://discord.gg/gsfcuzdwrG"},"Discord"),"."),(0,o.kt)("h3",{id:"community-tooling-improvement"},"Community Tooling Improvement"),(0,o.kt)("p",null,'The XREngine community requires maintenance of various "public infrastructure" resources. These include documentation, github repositories, CI build bots, and more. There is also helping new users with questions, spreading the word about XREngine, and so on. Soon, we will be planning and running conferences. Please get in touch if you would like to help out.'),(0,o.kt)("h3",{id:"translations"},"Translations"),(0,o.kt)("p",null,"Building a broad-ranging, global application is important to us. We offer i18n on our client front end, and gladly welcome any attempts to translate to new languages or maintain those i18n files."),(0,o.kt)("p",null,"Translated documentation is coming. If anyone has any issues understanding the English documentation, please let us know! We are very sensitive to language issues, and do not want to turn anyone away from hacking because of their language."),(0,o.kt)("h3",{id:"helping-in-other-ways"},"Helping in other ways"),(0,o.kt)("p",null,"XREngine occasionally is able to hire developers for part time or full time positions, to work on core development. If you couldn't imagine taking a better job anywhere, please come find us on Discord."),(0,o.kt)("h2",{id:"code-contribution-guidelines"},"Code Contribution Guidelines"),(0,o.kt)("h3",{id:"discuss-big-changes-as-issues-first"},"Discuss big changes as Issues first"),(0,o.kt)("p",null,"Significant improvements should be documented as GitHub issues before anybody starts to code. This gives other contributors a chance to point you in the right direction, give feedback on the design, and maybe point out if related work is under way."),(0,o.kt)("p",null,'Please take a moment to check whether an issue already exists. If it does, it never hurts to add a quick "+1" or "I have this problem too". This helps prioritize the most common problems and requests.'),(0,o.kt)("h3",{id:"pull-requests-always-welcome"},"Pull Requests always welcome"),(0,o.kt)("p",null,"We are always thrilled to receive pull requests, and do our best to process them as quickly as possible. However, if you are not sure if that typo is worth a pull request? Do it! We will appreciate it."),(0,o.kt)("p",null,"If your pull request is not accepted on the first try, don't be discouraged! If there's a problem with the implementation, hopefully you received feedback on what to improve."),(0,o.kt)("h4",{id:"git"},"Git"),(0,o.kt)("p",null,"We use a simple git branching model:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"dev")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"master")," must always work"),(0,o.kt)("li",{parentName:"ul"},"create feature-branches to merge into ",(0,o.kt)("inlineCode",{parentName:"li"},"dev")),(0,o.kt)("li",{parentName:"ul"},"all commits must pass testing so that git bisect is easy to run")),(0,o.kt)("p",null,"For personal project development, user ",(0,o.kt)("inlineCode",{parentName:"p"},"master"),". For development of the engine itself, use ",(0,o.kt)("inlineCode",{parentName:"p"},"dev"),"."),(0,o.kt)("h5",{id:"commit-messages"},"Commit messages"),(0,o.kt)("p",null,"Commit messages must start with a short subject line, followed by an optional, more detailed explanatory text which is separated from the summary by an empty line."),(0,o.kt)("p",null,"Subject line should not be more than 80 characters long. Most editors can help you count the number of characters in a line. And these days many good editors recognize the Git commit message format and warn in one way or another if the subject line is not separated from the rest of the commit message using an empty blank line."),(0,o.kt)("p",null,"See also the ",(0,o.kt)("a",{parentName:"p",href:"https://help.github.com/articles/changing-a-commit-message/"},"documentation about amending commits")," for an explanation about how you can rework commit messages."),(0,o.kt)("h5",{id:"commit-message-examples"},"Commit message examples"),(0,o.kt)("p",null,"Here is an example commit message:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"parse_test: improve tests with stdin enabled arg\n\nNow also check that we get the right arguments from\nthe parsing.\n")),(0,o.kt)("p",null,"And here is another longer one:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'net/p2p + secio: parallelize crypto handshake\n\nWe had a very nasty problem: handshakes were serial so incoming dials would wait for each other to finish handshaking. this was particularly problematic when handshakes hung-- nodes would not recover quickly. This led to gateways not bootstrapping peers fast enough.\n\nThe approach taken here is to do what crypto/tls does: defer the handshake until Read/Write[1]. There are a number of reasons why this is _the right thing to do_:\n- it delays handshaking until it is known to be necessary (doing io)\n- it "accepts" before the handshake, getting the handshake out of the\n  critical path entirely.\n- it defers to the user\'s parallelization of conn handling. users\n  must implement this in some way already so use that, instead of\n  picking constants surely to be wrong (how many handshakes to run\n  in parallel?)\n\n[0] http://golang.org/src/crypto/tls/conn.go#L886\n')),(0,o.kt)("h3",{id:"code"},"Code"),(0,o.kt)("p",null,"Write clean code. Universally formatted code promotes ease of writing, reading, and maintenance."),(0,o.kt)("h3",{id:"tests"},"Tests"),(0,o.kt)("p",null,"If the repository you are working on has a testing suite, submit tests with your changes. Take a look at existing tests for inspiration. Run the full test suite on your branch before submitting a pull request."),(0,o.kt)("p",null,"For command line tool changes, please write appropriate sharness tests."),(0,o.kt)("h3",{id:"documentation"},"Documentation"),(0,o.kt)("p",null,"Update documentation when creating or modifying features. Test your documentation changes for clarity, concision, and correctness, as well as a clean documentation build."),(0,o.kt)("h3",{id:"pull-requests"},"Pull Requests"),(0,o.kt)("p",null,"Pull requests descriptions should be as clear as possible. Err on the side of overly specific and include a reference to all related issues. If the pull request is meant to close an issue please use the Github keyword conventions of ",(0,o.kt)("a",{parentName:"p",href:"https://help.github.com/articles/closing-issues-via-commit-messages/"},"closes, fixes, or resolves"),". If the pull request only completes part of an issue use the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/waffleio/waffle.io/wiki/FAQs#prs-connect-keywords"},"connects keywords"),". This helps our tools properly link issues to pull requests."),(0,o.kt)("h4",{id:"code-review"},"Code Review"),(0,o.kt)("p",null,"We take code quality seriously; we must make sure the code remains correct. We do code review on all changesets. Discuss any comments, then make modifications and push additional commits to your feature branch. Be sure to post a comment after pushing. The new commits will show up in the pull request automatically, but the reviewers will not be notified unless you comment."),(0,o.kt)("p",null,"We use the ",(0,o.kt)("inlineCode",{parentName:"p"},"needs review")," as a signal that something needs review. If you can't add one to your own PR, feel free to request that the maintainers add the label to it."),(0,o.kt)("h4",{id:"rebasing"},"Rebasing"),(0,o.kt)("p",null,"Pull requests ",(0,o.kt)("strong",{parentName:"p"},"must be cleanly rebased ontop of master")," without multiple branches mixed into the PR. If master advances while your PR is in review, please keep rebasing it. It makes all our work much less error-prone."),(0,o.kt)("p",null,"Before the pull request is merged, make sure that you squash your commits into logical units of work using ",(0,o.kt)("inlineCode",{parentName:"p"},"git rebase -i")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"git push -f"),". After ",(0,o.kt)("em",{parentName:"p"},"every commit")," the test suite must be passing. This is so we can revert pieces, and so we can quickly bisect problems. Include documentation changes and tests in the same commit so that a revert would remove all traces of the feature or fix."),(0,o.kt)("h4",{id:"merge-approval"},"Merge Approval"),(0,o.kt)("p",null,"We use LGTM (Looks Good To Me) in comments on the code review to indicate acceptance. A change ",(0,o.kt)("strong",{parentName:"p"},"requires")," LGTMs from the maintainers of each component affected. If you know whom it may be, ping them."),(0,o.kt)("h4",{id:"reverting-changes"},"Reverting Changes"),(0,o.kt)("p",null,"When some change is introduced, and we decide that it isn't beneficial and/or it causes problems, we need to revert it."),(0,o.kt)("p",null,"To make the review process and the changes easier, use git's ",(0,o.kt)("inlineCode",{parentName:"p"},"revert")," command to revert those changes."),(0,o.kt)("p",null,"This suits a few purposes. First, it is much easier to see if some change was reverted by just looking into the history of the file. Imagine a commit with the title: ",(0,o.kt)("em",{parentName:"p"},"Add feature C"),". There are many ways one could form the title for a commit reverting it, but by using ",(0,o.kt)("inlineCode",{parentName:"p"},"git revert"),", it will be ",(0,o.kt)("em",{parentName:"p"},'Revert: "Add feature C"')," and thus very clear.\nSecond, by using ",(0,o.kt)("inlineCode",{parentName:"p"},"git revert")," we are sure that all changes were reverted. It is much easier to start again for state 0 and apply changes on it, than try to see if some transformation transforms state 1 to state 0."),(0,o.kt)("h4",{id:"what-if-a-commit-that-is-supposed-to-be-reverted-contains-changes-that-are-also-good"},"What if a commit that is supposed to be reverted contains changes that are also good?"),(0,o.kt)("p",null,"This usually means that commit wasn't granular enough. If you are the person that initially created the commit, in the future try to make commits that focus on just one aspect."),(0,o.kt)("p",null,"This doesn't mean that you should skip using ",(0,o.kt)("inlineCode",{parentName:"p"},"git revert"),". Use it, then use ",(0,o.kt)("inlineCode",{parentName:"p"},"git cherry-pick --no-commit")," to pull changes into your working tree and use interactive add to commit just the wanted ones. If interactive add is not enough to split the changes, still use interactive add to stage a superset of wanted changes and use ",(0,o.kt)("inlineCode",{parentName:"p"},"git checkout -- <file>")," to remove unstaged changes. Then proceed to edit the files to remove all unwanted changes, and add and commit only your wanted changes."),(0,o.kt)("p",null,"This way your log will look like:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'AAAAAA Revert "Fix bug C in A"\nBBBBBB Re-add feature A tests that were added in "Fix bug C in A"\n')),(0,o.kt)("h2",{id:"credits"},"Credits"),(0,o.kt)("p",null,"This document is based on ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/docker/docker/blob/master/CONTRIBUTING.md"},"Contributing to Docker"),", the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/docker/docker"},"Docker")," contribution guidelines."))}m.isMDXComponent=!0}}]);
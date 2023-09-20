<%Response.Buffer = true:Response.CharSet = "UTF-8":Session.CodePage = 65001%>
<%
	'取得當下網址'

	SEOTitle = "嗑糖!測出你的糖果類型找最適合的兼職打工| 1111人力銀行"
	SEOKeywords = "打工,歐趴糖,人格測驗,找工作,1111打工,找打工,高薪打工"
	SEODescription = "來1111找最甜的打工機會！30秒馬上測出你是哪種糖果角色，找到適合的打工方向，零用錢賺飽飽！完成測驗即享有LINE POINTS 25抽獎資格，名額有限快來參加！"
	SEOUrl = "https://event.1111.com.tw/event23/candyPT"
  SEOShareImg = "https://event.1111.com.tw/event23/candyPT/og.png"

  SEOCompany = "1111⼈⼒銀⾏ | 全球華⼈股份有限公司 | www.1111.com.tw "
  SEOCopyright = "1111⼈⼒銀⾏ | 全球華⼈股份有限公司版權所有© 1111 Job Bank All Rights Reserved. "
  SEOAuthor = "1111⼈⼒銀⾏ | 全球華⼈股份有限公司"
%>

<title><%=SEOTitle%></title>
<link rel="canonical" href="<%=SEOUrl%>" />
<meta name="title" content="<%=SEOTitle%>"> 
<meta name="keywords" content="<%=SEOKeywords%>">
<meta name="Description" content="<%=SEODescription%>">
<meta property="og:site_name" content="<%=SEOTitle%>">
<meta property="og:title" content="<%=SEOTitle%>">
<meta property="og:description" content="<%=SEODescription%>">
<meta property="og:keywords" content="<%=SEOKeywords%>">
<meta property="og:url" content="<%=SEOUrl%>">
<meta property="og:image" content="<%=SEOShareImg%>">
<meta name="twitter:title" content="<%=SEOTitle%>">
<meta name="twitter:description" content="<%=SEODescription%>">
<meta name="twitter:keywords" content="<%=SEOKeywords%>">
<meta name="twitter:url" content="<%=SEOUrl%>">
<meta name="twitter:image:src" content="<%=SEOShareImg%>">
<meta name="company" content="<%=SEOCompany%>">
<meta name="copyright" content="<%=SEOCopyright%>">
<meta name="author" content="<%=SEOAuthor%>">
<meta property="og:type" content="website">
<meta property="og:locale" content="zh_TW">

<script  type="application/ld+json">
	[
			{
				"@context": "http://schema.org/",
				"@type": "WebSite",
				"name": "<%=SEOTitle%>",
				"url": "<%=SEOUrl%>",
				"description": "<%=SEODescription%>",
				"potentialAction": {
						"@type": "SearchAction",
						"target": "https://event.1111.com.tw/event22/22yAdmissionSystem/result?years=111&typeRef=1&schoolType=1&seachType=2&ticketNum={search_term_string}",
						"query-input": "required name=search_term_string"
				}
		},
		{
				"@context": "http://schema.org",
				"@type": "Organization", "name": "1111人力銀行",
				"url": "https://www.1111.com.tw", "logo": "https://www.1111.com.tw/images102/logo0504.png", "contactPoint": [{ "@type": "ContactPoint", "telephone": "+886-02-8787-1111", "contactType": "customer service", "areaServed": ["TW"], "availableLanguage": ["Chinese"] }], "sameAs": ["https://www.facebook.com/1111jobbank", "https://twitter.com/1111jobbanknews", "https://www.youtube.com/user/1111JobBankNEWS", "https://www.linkedin.com/company/1111-job-bank"]
		}
	]
</script>
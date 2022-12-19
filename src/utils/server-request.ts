import axios from 'axios'

const instance = axios.create({
  headers: {
    'content-type': 'application/json',
    'cookie': 'GKD=%AD%A8%B4%9B%AA%B9%84q%9E%AD%8E%95%C6%D5%8C%99%92%99%9A%A9%A1%B8%CA%9D%95%AC%B7%AB%A7r%96%91%C4%E5%89%DC%A5%98%9A%B4%A9%93%A8%A8; visid_incap_2126585=IBrHp7HFS5Sd+bEk7j9bCUeikGMAAAAAQUIPAAAAAADzZmetFISgkC3hnDUaSH4i; incap_ses_934_2126585=95okaXsKiHWytcqFxzz2DEiikGMAAAAA4lWTmKSlz6L7sP1aBpf/Vg==; AMCVS_5E930F035D0D748A0A495ED1%40AdobeOrg=1; AMCV_5E930F035D0D748A0A495ED1%40AdobeOrg=179643557%7CMCIDTS%7C19334%7CMCMID%7C28240917598257842911400316803290847431%7CMCAAMLH-1671027917%7C11%7CMCAAMB-1671027917%7CRKhpRz8krg2tLO6pguXWp5olkAcUniQYPHaMWWgdJ3xzPWQmdj0y%7CMCOPTOUT-1670430317s%7CNONE%7CvVersion%7C5.5.0; s_cc=true; at_check=true; _fbp=fb.1.1670423120177.767697487; _gcl_au=1.1.1925676179.1670423121; _ga=GA1.1.372638543.1670423121; launch_ext_Ads_prefix_au=1.1.1979046282.1670423121; launch_ext_GA13=GA1.2.372638543.1670423121; launch_ext_GA5=GA1.2.372638543.1670423121; launch_ext_GA18=GA1.2.372638543.1670423121; launch_ext_GA11=GA1.2.372638543.1670423121; launch_ext_GA14=GA1.2.372638543.1670423121; launch_ext_GA9=GA1.2.372638543.1670423121; launch_ext_GA17=GA1.2.372638543.1670423121; launch_ext_GA10=GA1.2.372638543.1670423121; launch_ext_GA15=GA1.2.372638543.1670423121; launch_ext_GA12=GA1.2.372638543.1670423121; launch_ext_GA16=GA1.2.372638543.1670423121; _mkto_trk=id:858-DJP-749&token:_mch-ariscloud.com-1670423120890-38590; nmstat=fbf0d56b-8583-f7f2-a115-670497df042e; _biz_uid=d58966adf37f4f298af7b48ee8439aa3; _biz_flagsA=%7B%22Version%22%3A1%2C%22Mkto%22%3A%221%22%2C%22Ecid%22%3A%2284599820%22%2C%22XDomain%22%3A%221%22%2C%22ViewThrough%22%3A%221%22%2C%22Frm%22%3A%221%22%7D; incap_ses_1556_2126585=e0NAWuS/1Eq91ZXr+wWYFYajkGMAAAAAuIOugqzhm42QKF5SF2Xy5A==; notice_behavior=implied,us; incap_ses_1205_2126585=0ji3EDQUSWRVULgF5gW5EO+kkGMAAAAA9p4r/A0cslI2rfIYLBVJ+Q==; incap_ses_798_2126585=XS1rXHhuQSX2OkW4ixETC5+lkGMAAAAAtqxxvSLhKTV8iBumjE6Csw==; incap_ses_1134_2126585=SqYHbF+4zyQdzbYtzce8D1askGMAAAAAoLRuJZGj2V8TO2/D/W6Ixg==; incap_ses_1512_2126585=PloDYvJbiwOE2r10b7T7FGuskGMAAAAAbsdXUCNfJ+nxczTM7QR+1Q==; s_sq=%5B%5BB%5D%5D; _biz_nA=33; trwv.uid=softwareagwasterracottaemea-1670423121375-471500d4%3A1; mbox=session#a17325577d59495995bed74d492bceae#1670427775|PC#a17325577d59495995bed74d492bceae.32_0#1733670715; _biz_pendingA=%5B%5D; routing.umc=.umc0000000000; _ga_WR7W2ZB88V=GS1.1.1670423148.1.1.1670425959.0.0.0; _ga_68PM0N6EGH=GS1.1.1670423120.1.1.1670425959.6.0.0; _ga_NXPTBLQVHQ=GS1.1.1670423148.1.1.1670425959.0.0.0; locale=zh-CN; accesstoken=eyJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2NzE0NTgxMTgsImp0aSI6Im1WcFJWaFBzcVNoY20tc3lqeGVnY0xFdnJFelVpMjNQcUQ1MGRzMWxRblp5bXRZUG5PQlNZU1dYVTRpeiIsInN1YiI6Ijc3NTE0NjA2MUBxcS5jb20iLCJ0ZW4iOiJ4aWFvdGlhbjMiLCJhcGkiOmZhbHNlfQ.LXf12o7EZrUDvzTWwOp-2RExwvrRlxvuxao0IEoPPLM; apt.sid=AP-SBD10BNWGLHK-2-1671458120990-97287169; apt.uid=AP-SBD10BNWGLHK-2-1671458120991-28623935.0.2.0eb5294a-4ab2-4b81-b9a7-a8d758d2863e',
    'csrftoken': 'hMr3UHEVEx9-vTVm-3HqojzjGbPmVHOMSROJhQQL1lI',
    'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36',
    'Host': 'processmining.ariscloud.com',
    'origin': 'https://processmining.ariscloud.com'
  }
})

export default instance
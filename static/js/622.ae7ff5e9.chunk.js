"use strict";(self.webpackChunkreadjorney=self.webpackChunkreadjorney||[]).push([[622],{4622:function(n,e,t){t.r(e),t.d(e,{default:function(){return bt}});var i,r,o,a,d,p,x,l,s,h,c,g,u,m,f,w,b,v,Z,k,j,y,P,z,C,S,A,E,U,L,T,q,B,D,_,I,M,R,H,X,N,O,Q,V,F,G,J,K,W,Y,$,nn,en,tn,rn,on,an,dn,pn,xn,ln,sn,hn,cn,gn,un=t(1413),mn=t(5861),fn=t(9439),wn=t(7757),bn=t.n(wn),vn=t(2791),Zn=t(7689),kn=t(1087),jn=t(4420),yn=t(1134),Pn=t(4695),zn=t(1454),Cn=t(168),Sn=t(5867),An=Sn.ZP.div(i||(i=(0,Cn.Z)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.6);\n  z-index: 999;\n"]))),En=Sn.ZP.div(r||(r=(0,Cn.Z)(["\n  position: absolute;\n  width: 500px;\n  height: 483px;\n  left: calc(50% - 500px / 2);\n  top: calc(50% - 483px / 2);\n  background: #1f1f1f;\n  border: 1px solid rgba(104, 104, 104, 0.2);\n  border-radius: 12px;\n  box-sizing: border-box;\n  padding: 50px;\n  z-index: 1000;\n\n  @media (max-width: 768px) {\n    width: 335px;\n    height: 421px;\n    left: calc(50% - 335px / 2);\n    top: calc(50% - 421px / 2);\n    padding: 40px;\n  }\n"]))),Un=Sn.ZP.div(o||(o=(0,Cn.Z)(["\n  position: absolute;\n  top: 21px;\n  right: 21px;\n  width: 22px;\n  height: 22px;\n  cursor: pointer;\n\n  img {\n    width: 100%;\n    height: 100%;\n  }\n\n  @media (max-width: 768px) {\n    top: 21px;\n    right: 21px;\n  }\n"]))),Ln=Sn.ZP.img(a||(a=(0,Cn.Z)(["\n  width: 153px;\n  height: 233px;\n  margin: 0 auto;\n  display: block;\n  border-radius: 8px;\n\n  @media (max-width: 768px) {\n    width: 140px;\n    height: 213px;\n  }\n"]))),Tn=Sn.ZP.div(d||(d=(0,Cn.Z)(["\n  text-align: center;\n  margin-top: 16px;\n"]))),qn=Sn.ZP.div(p||(p=(0,Cn.Z)(["\n  font-size: 20px;\n  font-weight: 700;\n  line-height: 20px;\n  letter-spacing: -0.02em;\n  color: var(--white);\n\n  @media (max-width: 768px) {\n    font-size: 18px;\n    font-weight: 700;\n    line-height: 18px;\n    letter-spacing: -0.02em;\n  }\n"]))),Bn=Sn.ZP.div(x||(x=(0,Cn.Z)(["\n  font-size: 14px;\n  font-weight: 500;\n  line-height: 18px;\n  letter-spacing: -0.02em;\n  text-align: center;\n  color: var(--lightgray);\n  margin-top: 4px;\n\n  @media (max-width: 768px) {\n    font-size: 12px;\n    font-weight: 500;\n    line-height: 14px;\n    letter-spacing: -0.02em;\n  }\n"]))),Dn=Sn.ZP.div(l||(l=(0,Cn.Z)(["\n  font-size: 10px;\n  font-weight: 500;\n  line-height: 12px;\n  letter-spacing: -0.02em;\n  color: var(--white);\n\n  @media (max-width: 768px) {\n    font-size: 10px;\n    font-weight: 500;\n    line-height: 12px;\n    letter-spacing: -0.02em;\n  }\n"]))),_n=Sn.ZP.button(s||(s=(0,Cn.Z)(["\n  display: block;\n  margin: 32px auto 0;\n  width: 162px;\n  height: 46px;\n  border: 1px solid rgba(249, 249, 249, 0.2);\n  border-radius: 30px;\n  background: none;\n  color: var(--white);\n  font-size: 16px;\n  font-weight: 700;\n  line-height: 18px;\n  letter-spacing: 0.02em;\n  cursor: pointer;\n  text-align: center;\n\n  &:hover {\n    background-color: rgba(249, 249, 249, 0.1);\n  }\n\n  @media (max-width: 768px) {\n    margin: 20px auto 0;\n    width: 141px;\n    height: 42px;\n\n    font-size: 14px;\n    font-weight: 700;\n    line-height: 18px;\n    letter-spacing: 0.02em;\n  }\n"]))),In=t(1907),Mn=t(2769),Rn=t(184),Hn=function(n){var e=n.book,t=n.onClose,i=(0,Zn.s0)();(0,vn.useEffect)((function(){var n=function(n){"Escape"===n.key&&t()};return document.addEventListener("keydown",n),function(){document.removeEventListener("keydown",n)}}),[t]);return(0,Rn.jsx)(An,{onClick:function(n){n.target===n.currentTarget&&t()},children:(0,Rn.jsxs)(En,{children:[(0,Rn.jsx)(Un,{onClick:t,children:(0,Rn.jsx)("img",{src:In.Z,alt:"Close"})}),e.imageUrl?(0,Rn.jsx)(Ln,{src:e.imageUrl,alt:e.title}):(0,Rn.jsx)(Ln,{src:Mn,alt:"Book cover is not available"}),(0,Rn.jsxs)(Tn,{children:[(0,Rn.jsx)(qn,{children:e.title}),(0,Rn.jsx)(Bn,{children:e.author}),(0,Rn.jsxs)(Dn,{children:[e.totalPages," pages"]})]}),(0,Rn.jsx)(_n,{onClick:function(){i("/reading",{state:{book:e}})},children:"Start reading"})]})})},Xn=t(7164),Nn=t(4068),On=Sn.ZP.div(h||(h=(0,Cn.Z)(["\n  width: 1280px;\n  height: 800px;\n  background-color: var(--black);\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: center;\n  padding: 32px;\n  gap: 16px;\n  margin: auto;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n\n  @media (max-width: 1440px) {\n    width: 768px;\n    height: 1169px;\n  }\n  @media (max-width: 768px) {\n    width: 375px;\n    height: 983px;\n    padding: 20px;\n    gap: 10px;\n  }\n"]))),Qn=Sn.ZP.div(c||(c=(0,Cn.Z)(["\n  width: 1216px;\n  height: 74px;\n  background-color: var(--lightblack);\n  border-radius: 15px;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  padding: 0 16px;\n\n  @media (max-width: 1440px) {\n    width: 704px;\n    height: 74px;\n  }\n\n  @media (max-width: 768px) {\n    width: 335px;\n    height: 57px;\n    padding: 11px 20px;\n  }\n"]))),Vn=Sn.ZP.div(g||(g=(0,Cn.Z)(["\n  width: 158px;\n  height: 26px;\n  gap: 40px;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n\n  @media (max-width: 1440px) {\n    width: 147px;\n    gap: 32px;\n  }\n\n  @media (max-width: 768px) {\n    margin-top: 240px;\n    width: 75px;\n    height: 60px;\n    flex-direction: column;\n    justify-content: center;\n    align-items: flex-start;\n  }\n"]))),Fn=Sn.ZP.div(u||(u=(0,Cn.Z)(["\n  font-size: 16px;\n  font-weight: 500;\n  line-height: 18px;\n  letter-spacing: -0.02em;\n  color: ",";\n  background-color: var(--lightblack);\n  border-bottom: ",";\n\n  &:hover {\n    color: var(--white);\n    cursor: pointer;\n  }\n"])),(function(n){return n.isActive?"var(--white)":"var(--lightgray)"}),(function(n){return n.isActive?"2px solid var(--blue)":"none"})),Gn=Sn.ZP.img(m||(m=(0,Cn.Z)(["\n  width: 182px;\n  height: 17px;\n  color: var(--white);\n\n  @media (max-width: 1440px) {\n    width: 42px;\n    content: url(",");\n  }\n"])),(function(n){return n.mobilesrc})),Jn=Sn.ZP.div(f||(f=(0,Cn.Z)(["\n  width: 400px;\n  height: 42px;\n  display: flex;\n  justify-content: end;\n  align-items: center;\n  gap: 8px;\n\n  @media (max-width: 1440px) {\n    width: 175px;\n    gap: 16px;\n  }\n\n  @media (max-width: 768px) {\n    gap: 10px;\n  }\n"]))),Kn=Sn.ZP.div(w||(w=(0,Cn.Z)(["\n  width: 40px;\n  height: 40px;\n  background-color: var(--lightblack);\n  border: 1px solid rgba(249, 249, 249, 0.2);\n  border-radius: 50%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 16px;\n  font-weight: 700;\n  line-height: 18px;\n  letter-spacing: -0.02em;\n  text-align: center;\n  color: var(--white);\n\n  @media (max-width: 768px) {\n    line-height: 16px;\n    width: 35px;\n    height: 35px;\n  }\n"]))),Wn=Sn.ZP.div(b||(b=(0,Cn.Z)(["\n  font-size: 16px;\n  font-weight: 700;\n  line-height: 18px;\n  letter-spacing: -0.02em;\n  text-align: center;\n  color: var(--white);\n  margin-right: 8px;\n\n  @media (max-width: 1440px) {\n    display: none;\n  }\n"]))),Yn=Sn.ZP.div(v||(v=(0,Cn.Z)(["\n  border: 1px solid rgba(249, 249, 249, 0.2);\n  border-radius: 30px;\n  padding: 12px 28px;\n  color: var(--white);\n  background-color: var(--lightblack);\n  cursor: pointer;\n  font-size: 16px;\n  font-weight: 700;\n  line-height: 18px;\n  letter-spacing: 0.02em;\n  text-align: center;\n\n  &:hover {\n    color: var(--lightblack);\n    background-color: var(--white);\n    border: 1px solid rgba(249, 249, 249, 0.2);\n  }\n  @media (max-width: 768px) {\n    display: none;\n  }\n"]))),$n=Sn.ZP.img(Z||(Z=(0,Cn.Z)(["\n  @media (min-width: 769px) {\n    display: none;\n  }\n\n  @media (max-width: 768px) {\n    width: 28px;\n    height: 28px;\n    color: var(--white);\n  }\n"]))),ne=Sn.ZP.div(k||(k=(0,Cn.Z)(["\n  width: 1216px;\n  height: 700px;\n  background-color: var(--black);\n  display: flex;\n  flex-direction: row;\n  gap: 16px;\n\n  @media (max-width: 1440px) {\n    width: 704px;\n    height: 1015px;\n    flex-direction: column;\n  }\n\n  @media (max-width: 768px) {\n    width: 335px;\n    height: 876px;\n    flex-direction: column;\n    gap: 10px;\n  }\n"]))),ee=Sn.ZP.div(j||(j=(0,Cn.Z)(["\n  width: 353px;\n  height: 651px;\n  background-color: var(--lightblack);\n  border-radius: 30px;\n  padding: 20px;\n  gap: 78px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n\n  @media (max-width: 1440px) {\n    width: 704px;\n    height: 336px;\n    flex-direction: row;\n    padding: 32px;\n    gap: 32px;\n  }\n\n  @media (max-width: 768px) {\n    flex-direction: column;\n    width: 335px;\n    height: 528px;\n    padding: 20px;\n    gap: 20px;\n  }\n"]))),te=Sn.ZP.div(y||(y=(0,Cn.Z)(["\n  width: 313px;\n  height: 274px;\n  background-color: var(--lightblack);\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: left;\n  gap: 8px;\n\n  @media (max-width: 1440px) {\n    width: 295px;\n    height: 278px;\n  }\n"]))),ie=Sn.ZP.div(P||(P=(0,Cn.Z)(["\n  font-size: 14px;\n  font-weight: 500;\n  line-height: 18px;\n  letter-spacing: -0.02em;\n  text-align: left;\n  color: var(--white);\n  margin-left: 14px;\n  margin-top: 20px;\n\n  @media (max-width: 1440px) {\n    margin-top: 0px;\n  }\n\n  @media (max-width: 768px) {\n    font-size: 10px;\n    font-weight: 500;\n    line-height: 12px;\n    margin-top: 0px;\n  }\n"]))),re=Sn.ZP.div(z||(z=(0,Cn.Z)(["\n  position: relative;\n  display: flex;\n  align-items: center;\n  width: 100%;\n"]))),oe=(Sn.ZP.div(C||(C=(0,Cn.Z)(["\n  width: 313px;\n  height: 50px;\n  padding: 16px;\n  gap: 8px;\n  border-radius: 12px;\n  background-color: var(--darkgray);\n  color: var(--white);\n  border: none;\n  font-size: 14px;\n  font-weight: 500;\n  line-height: 18px;\n  letter-spacing: -0.02em;\n  text-align: left;\n\n  span {\n    color: var(--lightgray);\n  }\n\n  @media (max-width: 1440px) {\n    width: 295px;\n  }\n  @media (max-width: 768px) {\n    width: 295px;\n    height: 44px;\n    padding: 14px;\n    font-size: 12px;\n    font-weight: 500;\n    line-height: 16px;\n    letter-spacing: -0.02em;\n  }\n"]))),Sn.ZP.button(S||(S=(0,Cn.Z)(["\n  padding: 20px;\n  width: 122px;\n  height: 42px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border: 1px solid rgba(249, 249, 249, 0.2);\n  border-radius: 30px;\n  background-color: var(--darkgray);\n  color: var(--white);\n  font-size: 16px;\n  font-weight: 700;\n  cursor: pointer;\n  margin-top: 12px;\n\n  &:hover {\n    color: var(--lightblack);\n    background-color: var(--white);\n    border: 1px solid rgba(249, 249, 249, 0.2);\n  }\n\n  @media (max-width: 1440px) {\n    margin-top: 35px;\n  }\n\n  @media (max-width: 768px) {\n    width: 90px;\n    height: 38px;\n    padding: 10px;\n    font-size: 14px;\n    font-weight: 700;\n    line-height: 18px;\n    letter-spacing: 0.02em;\n    text-align: left;\n    margin-top: 12px;\n  }\n"])))),ae=Sn.ZP.div(A||(A=(0,Cn.Z)(["\n  width: 313px;\n  height: 259px;\n  border-radius: 12px;\n  padding: 20px;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: start;\n  gap: 20px;\n  background-color: var(--darkgray);\n\n  @media (max-width: 1440px) {\n    height: 272px;\n  }\n  @media (max-width: 768px) {\n    width: 295px;\n    height: 244px;\n    gap: 0px;\n  }\n"]))),de=Sn.ZP.h3(E||(E=(0,Cn.Z)(["\n  font-size: 20px;\n  font-weight: 700;\n  line-height: 20px;\n  letter-spacing: -0.02em;\n  color: var(--white);\n  background-color: var(--darkgray);\n  text-align: left;\n\n  @media (max-width: 768px) {\n    font-size: 18px;\n    font-weight: 700;\n    line-height: 18px;\n    letter-spacing: -0.02em;\n    text-align: left;\n    margin-bottom: 14px;\n  }\n"]))),pe=Sn.ZP.div(U||(U=(0,Cn.Z)(["\n  width: 273px;\n  height: 24px;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  background-color: var(--darkgray);\n\n  @media (max-width: 768px) {\n    width: 253px;\n    margin-top: 10px;\n  }\n"]))),xe=Sn.ZP.a(L||(L=(0,Cn.Z)(["\n  font-size: 14px;\n  font-weight: 500;\n  line-height: 18px;\n  letter-spacing: -0.02em;\n  text-align: left;\n  text-decoration: underline;\n  cursor: pointer;\n  color: var(--lightgray);\n  background-color: var(--darkgray);\n\n  &:hover {\n    color: var(--white);\n    cursor: pointer;\n  }\n"]))),le=Sn.ZP.img(T||(T=(0,Cn.Z)(["\n  width: 24px;\n  height: 24px;\n  color: var(--white);\n\n  &:hover {\n    cursor: pointer;\n  }\n"]))),se=Sn.ZP.div(q||(q=(0,Cn.Z)(["\n  width: 847px;\n  height: 651px;\n  background-color: var(--lightblack);\n  border-radius: 30px;\n  padding: 40px 40px 27px 40px;\n\n  @media (max-width: 1440px) {\n    width: 704px;\n    height: 663px;\n    padding: 40px;\n  }\n\n  @media (max-width: 768px) {\n    width: 335px;\n    height: 407px;\n    padding: 40px 20px;\n  }\n"]))),he=Sn.ZP.div(B||(B=(0,Cn.Z)(["\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: start;\n  margin-bottom: 27px;\n\n  @media (max-width: 1440px) {\n    width: 624px;\n    margin-bottom: 20px;\n  }\n\n  @media (max-width: 768px) {\n    width: 295px;\n    height: 32px;\n    margin-bottom: 22px;\n  }\n"]))),ce=Sn.ZP.div(D||(D=(0,Cn.Z)(["\n  font-size: 28px;\n  font-weight: 700;\n  line-height: 32px;\n  letter-spacing: 0.02em;\n  text-align: left;\n  color: var(--white);\n\n  @media (max-width: 768px) {\n    font-size: 20px;\n    line-height: 20px;\n  }\n"]))),ge=Sn.ZP.div(_||(_=(0,Cn.Z)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.6);\n  display: ",";\n  z-index: 999;\n\n  @media (min-width: 769px) {\n    display: none;\n  }\n"])),(function(n){return"true"===n.isvisible?"block":"none"})),ue=Sn.ZP.div(I||(I=(0,Cn.Z)(["\n  position: absolute;\n  top: 0;\n  left: 155px;\n  width: 200px;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: center;\n  background-color: var(--darkgray);\n  padding: 40px 20px;\n  display: ",";\n  z-index: 1000;\n\n  @media (min-width: 769px) {\n    display: none;\n  }\n"])),(function(n){return"true"===n.isvisible?"flex":"none"})),me=Sn.ZP.div(M||(M=(0,Cn.Z)(["\n  width: 91px;\n  height: 38px;\n  border: 1px solid rgba(249, 249, 249, 0.2);\n  border-radius: 30px;\n  padding: 10px;\n  color: var(--white);\n  background-color: var(--lightblack);\n  cursor: pointer;\n  font-size: 14px;\n  font-weight: 700;\n  line-height: 18px;\n  letter-spacing: 0.02em;\n  text-align: center;\n  margin-top: auto;\n\n  &:hover {\n    color: var(--lightblack);\n    background-color: var(--white);\n    border: 1px solid rgba(249, 249, 249, 0.2);\n  }\n\n  @media (min-width: 769px) {\n    display: none;\n  }\n"]))),fe=Sn.ZP.div(R||(R=(0,Cn.Z)(["\n  position: absolute;\n  top: 34px;\n  right: 40px;\n  width: 28px;\n  height: 28px;\n  color: var(--white);\n  cursor: pointer;\n\n  img {\n    width: 100%;\n    height: 100%;\n    color: var(--white);\n  }\n\n  @media (min-width: 769px) {\n    display: none;\n  }\n"]))),we=Sn.ZP.div(H||(H=(0,Cn.Z)(["\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  column-gap: 20px;\n\n  background-color: var(--darkgray);\n  @media (max-width: 1440px) {\n    grid-template-columns: repeat(3, 1fr);\n    column-gap: 25px;\n  }\n\n  @media (max-width: 768px) {\n    grid-template-columns: repeat(3, 1fr);\n    column-gap: 20px;\n  }\n"]))),be=Sn.ZP.div(X||(X=(0,Cn.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  background-color: var(--lightblack);\n  text-align: center;\n"]))),ve=Sn.ZP.img(N||(N=(0,Cn.Z)(["\n  width: 71px;\n  height: 107px;\n  object-fit: cover;\n  border-radius: 8px;\n  margin-bottom: 8px;\n"]))),Ze=Sn.ZP.div(O||(O=(0,Cn.Z)(["\n  width: 71px;\n  height: 26px;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  gap: 2px;\n  @media (max-width: 1440px) {\n    height: 31px;\n  }\n  @media (max-width: 768px) {\n    height: 26px;\n  }\n"]))),ke=Sn.ZP.div(Q||(Q=(0,Cn.Z)(["\n  font-size: 10px;\n  font-weight: 700;\n  line-height: 12px;\n  letter-spacing: -0.02em;\n  text-align: left;\n  color: var(--white);\n  width: 71px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n\n  @media (max-width: 768px) {\n  }\n"]))),je=Sn.ZP.div(V||(V=(0,Cn.Z)(["\n  font-size: 10px;\n  font-weight: 500;\n  line-height: 12px;\n  letter-spacing: -0.02em;\n  text-align: left;\n  color: var(--lightgray);\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n"]))),ye=Sn.ZP.div(F||(F=(0,Cn.Z)(["\n  display: grid;\n  grid-template-columns: repeat(5, 1fr);\n  column-gap: 20px;\n  row-gap: 27px;\n  max-height: 600px;\n  overflow-y: auto;\n\n  @media (max-width: 1440px) {\n    grid-template-columns: repeat(4, 1fr);\n    column-gap: 25px;\n  }\n\n  @media (max-width: 768px) {\n    grid-template-columns: repeat(2, 1fr);\n    column-gap: 21px;\n  }\n"]))),Pe=Sn.ZP.div(G||(G=(0,Cn.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  background-color: var(--lightblack);\n  text-align: center;\n\n  &:nth-child(n + 11) {\n    display: none; \n  }\n\n  @media (max-width: 1440px) {\n    &:nth-child(n + 9) {\n      display: none; \n    }\n  }\n\n  @media (max-width: 768px) {\n    &:nth-child(n + 3) {\n      display: none; \n    }\n  }\n"]))),ze=Sn.ZP.img(J||(J=(0,Cn.Z)(["\n  width: 137px;\n  height: 208px;\n  object-fit: cover;\n  border-radius: 8px;\n  margin-bottom: 8px;\n"]))),Ce=Sn.ZP.div(K||(K=(0,Cn.Z)(["\n  width: 137px;\n  height: 32px;\n  display: flex;\n  flex-direction: row;\n  align-items: flex-start;\n  gap: 2px;\n  @media (max-width: 1440px) {\n    height: 32px;\n  }\n  @media (max-width: 768px) {\n    height: 32px;\n  }\n"]))),Se=Sn.ZP.div(W||(W=(0,Cn.Z)(["\n  width: 89px;\n  height: 32px;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  gap: 2px;\n\n  @media (max-width: 1440px) {\n  }\n  @media (max-width: 768px) {\n    width: 95px;\n  }\n"]))),Ae=Sn.ZP.div(Y||(Y=(0,Cn.Z)(["\n  font-size: 14px;\n  font-weight: 700;\n  line-height: 18px;\n  letter-spacing: -0.02em;\n  text-align: left;\n  color: var(--white);\n  width: 87px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n\n  @media (max-width: 768px) {\n    width: 95px;\n  }\n"]))),Ee=Sn.ZP.div($||($=(0,Cn.Z)(["\n  width: 87px;\n  font-size: 10px;\n  font-weight: 500;\n  line-height: 12px;\n  letter-spacing: -0.02em;\n  text-align: left;\n  color: var(--lightgray);\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n\n  @media (max-width: 768px) {\n    width: 95px;\n  }\n"]))),Ue=Sn.ZP.img(nn||(nn=(0,Cn.Z)(["\n  width: 28px;\n  height: 28px;\n  color: #e85050;\n\n  &:hover {\n    cursor: pointer;\n  }\n"]))),Le=Sn.ZP.div(en||(en=(0,Cn.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  height: 100%;\n  position: relative;\n\n  @media (max-width: 768px) {\n    justify-content: flex-start;\n  }\n"]))),Te=Sn.ZP.div(tn||(tn=(0,Cn.Z)(["\n  width: 130px;\n  height: 130px;\n  background-color: #262626;\n  border-radius: 50%;\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  &::before {\n    content: '\ud83d\udcda';\n    font-size: 70px;\n    position: absolute;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n  }\n\n  @media (max-width: 768px) {\n    width: 100px;\n    height: 100px;\n    font-size: 50px;\n\n    &::before {\n      font-size: 50px;\n    }\n  }\n"]))),qe=Sn.ZP.div(rn||(rn=(0,Cn.Z)(["\n  width: 274px;\n  height: 36px;\n  font-size: 14px;\n  font-weight: 500;\n  line-height: 18px;\n  text-align: center;\n  letter-spacing: -0.02em;\n  color: #f9f9f9;\n  margin-top: 20px;\n\n  span {\n    color: #686868;\n  }\n\n  @media (max-width: 768px) {\n    width: 197px;\n    height: 54px;\n    font-size: 14px;\n    font-weight: 500;\n    line-height: 18px;\n    letter-spacing: -0.02em;\n    text-align: center;\n  }\n"]))),Be=Sn.ZP.input(on||(on=(0,Cn.Z)(["\n  width: 313px;\n  height: 50px;\n  padding: 16px;\n  margin-bottom: 8px;\n  border-radius: 12px;\n  background-color: var(--darkgray);\n  color: var(--white);\n  border: none;\n  font-size: 14px;\n  font-weight: 500;\n  line-height: 18px;\n  letter-spacing: -0.02em;\n  text-align: left;\n\n  &::placeholder {\n    color: var(--lightgray);\n    opacity: 1; \n  }\n\n  &:focus {\n    border: 1px solid rgba(249, 249, 249, 0.1);\n    outline: none;\n  }\n\n  @media (max-width: 1440px) {\n    width: 295px;\n  }\n  @media (max-width: 768px) {\n    width: 295px;\n    height: 44px;\n    padding: 14px;\n    font-size: 12px;\n    font-weight: 500;\n    line-height: 16px;\n    letter-spacing: -0.02em;\n  }\n"]))),De=Sn.ZP.p(an||(an=(0,Cn.Z)(["\n  font-size: 10px;\n  font-weight: 500;\n  line-height: 12px;\n  letter-spacing: -0.02em;\n  color: #e90516;\n  text-align: left;\n"]))),_e=(Sn.ZP.div(dn||(dn=(0,Cn.Z)(["\n  width: 153px;\n  height: 46px;\n  background: var(--darkgray);\n  border: 1px solid #3e3e3e;\n  border-radius: 12px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  cursor: pointer;\n\n  @media (max-width: 768px) {\n    width: 120px;\n    height: 40px;\n  }\n"]))),Sn.ZP.div(pn||(pn=(0,Cn.Z)(["\n  font-size: 14px;\n  font-weight: 500;\n  line-height: 18px;\n  letter-spacing: -0.02em;\n  text-align: center;\n  color: var(--white);\n  display: flex;\n  justify-content: space-between;\n  width: 100%;\n  padding: 0 14px;\n"]))),Sn.ZP.div(xn||(xn=(0,Cn.Z)(["\n  position: absolute;\n  top: 50px;\n  width: 153px;\n  background: #262626;\n  border-radius: 12px;\n  z-index: 10;\n\n  @media (max-width: 768px) {\n    width: 120px;\n  }\n"]))),Sn.ZP.div(ln||(ln=(0,Cn.Z)(["\n  font-size: 14px;\n  font-weight: 500;\n  line-height: 18px;\n  letter-spacing: -0.02em;\n  text-align: left;\n  color: #686868;\n  cursor: pointer;\n\n  &:hover {\n    background: #3e3e3e;\n    color: #f9f9f9;\n  }\n\n  &:first-child {\n    border-top-left-radius: 12px;\n    border-top-right-radius: 12px;\n  }\n\n  &:last-child {\n    border-bottom-left-radius: 12px;\n    border-bottom-right-radius: 12px;\n  }\n\n  @media (max-width: 768px) {\n    ont-size: 12px;\n    line-height: 16px;\n  }\n"]))),Sn.ZP.div(sn||(sn=(0,Cn.Z)(["\n  position: relative;\n  width: 153px;\n  height: 46px;\n  border: 1px solid #3e3e3e;\n  border-radius: 12px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: var(--lightblack);\n"])))),Ie=Sn.ZP.div(hn||(hn=(0,Cn.Z)(["\n  width: 100%;\n  text-align: center;\n  font-weight: 500;\n  font-size: 14px;\n  line-height: 18px;\n  color: #f9f9f9;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 0 10px;\n  cursor: pointer;\n\n  img {\n    width: 16px;\n    height: 16px;\n  }\n\n  @media (max-width: 768px) {\n    ont-size: 12px;\n    line-height: 16px;\n  }\n"]))),Me=Sn.ZP.div(cn||(cn=(0,Cn.Z)(["\n  position: absolute;\n  top: 100%;\n  left: 0;\n  width: 153px;\n  background-color: #262626;\n  border-radius: 12px;\n  margin-top: 5px;\n  z-index: 10;\n"]))),Re=Sn.ZP.div(gn||(gn=(0,Cn.Z)(["\n  padding: 7px;\n  font-weight: 500;\n  font-size: 14px;\n  line-height: 18px;\n  color: #686868;\n  cursor: pointer;\n\n  &:hover {\n    color: #f9f9f9;\n    background-color: #333;\n  }\n\n  &:last-child {\n    border-bottom-left-radius: 12px;\n    border-bottom-right-radius: 12px;\n  }\n\n  @media (max-width: 768px) {\n    ont-size: 12px;\n    line-height: 16px;\n  }\n"]))),He=t(6653),Xe=t(9287),Ne=t(3818),Oe=t(1830);var Qe,Ve,Fe,Ge,Je,Ke,We,Ye=t.p+"static/media/delete.741b4ad693b4e41abd542949ce48ec77.svg",$e=t(9748),nt=t(474),et=t(8876),tt=t(2497),it=t(5124),rt=t(3588),ot=t(8007),at=ot.Ry().shape({title:ot.Z_().min(2,"Title must be at least 2 characters").max(100,"Maximum title length is 100 characters").required("Title is required"),author:ot.Z_().min(2,"Author name must be at least 2 characters").max(50,"Maximum author name length is 50 characters").required("Author is required"),totalPages:ot.Rx().typeError("Total pages must be a number").positive("Total pages must be a positive number").integer("Total pages must be an integer").min(1,"Total pages must be at least 1").required("Total pages are required")}),dt=Sn.ZP.div(Qe||(Qe=(0,Cn.Z)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.6);\n  z-index: 999;\n"]))),pt=Sn.ZP.div(Ve||(Ve=(0,Cn.Z)(["\n  position: absolute;\n  width: 342px;\n  height: 340px;\n  left: calc(50% - 342px / 2);\n  top: 280px;\n  background: #1f1f1f;\n  border: 1px solid rgba(104, 104, 104, 0.2);\n  border-radius: 12px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 0px;\n  gap: 32px;\n  box-sizing: border-box;\n  padding: 30px;\n\n  @media (max-width: 768px) {\n    width: 335px;\n    height: 310px;\n  }\n"]))),xt=Sn.ZP.div(Fe||(Fe=(0,Cn.Z)(["\n  position: absolute;\n  top: 16px;\n  right: 16px;\n  width: 22px;\n  height: 22px;\n  cursor: pointer;\n\n  img {\n    width: 100%;\n    height: 100%;\n  }\n\n  @media (max-width: 768px) {\n    right: 12px;\n  }\n"]))),lt=Sn.ZP.div(Ge||(Ge=(0,Cn.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 0px;\n  gap: 14px;\n\n  @media (max-width: 768px) {\n    gap: 10px;\n  }\n"]))),st=Sn.ZP.div(Je||(Je=(0,Cn.Z)(["\n  font-size: 30px;\n  font-weight: 700;\n  line-height: 30px;\n  text-align: center;\n  color: #f9f9f9;\n\n  @media (max-width: 768px) {\n    font-size: 24px;\n    font-weight: 700;\n    line-height: 24px;\n  }\n"]))),ht=Sn.ZP.div(Ke||(Ke=(0,Cn.Z)(["\n  font-size: 18px;\n  font-weight: 500;\n  line-height: 29px;\n  text-align: center;\n  color: #686868;\n  width: 242px;\n\n  span {\n    color: #f9f9f9;\n  }\n\n  @media (max-width: 768px) {\n    letter-spacing: -0.02em;\n  }\n"]))),ct=Sn.ZP.button(We||(We=(0,Cn.Z)(["\n  background-color: #ff4d4f;\n  color: white;\n  font-size: 16px;\n  font-weight: bold;\n  padding: 8px 16px;\n  border: none;\n  border-radius: 8px;\n  cursor: pointer;\n\n  &:hover {\n    background-color: #ff7875;\n  }\n"]))),gt=function(n){var e=n.book,t=n.onClose,i=n.onDelete;(0,vn.useEffect)((function(){var n=function(n){"Escape"===n.key&&t()};return document.addEventListener("keydown",n),function(){document.removeEventListener("keydown",n)}}),[t]);return(0,Rn.jsx)(dt,{onClick:function(n){n.target===n.currentTarget&&t()},children:(0,Rn.jsxs)(pt,{children:[(0,Rn.jsx)(xt,{onClick:t,children:(0,Rn.jsx)("img",{src:In.Z,alt:"Close"})}),(0,Rn.jsxs)(lt,{children:[(0,Rn.jsx)(st,{children:"Delete Book"}),(0,Rn.jsxs)(ht,{children:["Are you sure you want to delete: ",(0,Rn.jsx)("span",{children:e.title})," by"," ",(0,Rn.jsx)("span",{children:e.author}),"?"]})]}),(0,Rn.jsx)(ct,{onClick:i,children:"DELETE"})]})})},ut=t(3016),mt=function(){var n=(0,mn.Z)(bn().mark((function n(e,t){var i,r;return bn().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,ut.Z.delete("https://readjourney.b.goit.study/api/books/remove/".concat(e),{headers:{Authorization:"Bearer ".concat(t),Accept:"application/json"}});case 3:return i=n.sent,n.abrupt("return",{success:!0,data:i.data});case 7:if(n.prev=7,n.t0=n.catch(0),r="An error occurred. Please try again.",!n.t0.response){n.next=23;break}n.t1=n.t0.response.status,n.next=400===n.t1?14:401===n.t1?16:404===n.t1?18:500===n.t1?20:22;break;case 14:return r="Bad request (invalid request body)",n.abrupt("break",23);case 16:return r="This book not found",n.abrupt("break",23);case 18:return r="Service not found",n.abrupt("break",23);case 20:return r="Server error",n.abrupt("break",23);case 22:r="An unexpected error occurred.";case 23:return n.abrupt("return",{success:!1,message:r});case 24:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(e,t){return n.apply(this,arguments)}}();var ft=t.p+"static/media/chevronDown.ed7ba7edebb5c871cb1c129aa7bcc742.svg";var wt=t.p+"static/media/chevronUpp.96230b19cdbcad897ebb36c94642ecea.svg",bt=function(){var n=(0,vn.useContext)($e.V),e=n.signout,t=n.user,i=(0,vn.useContext)(nt.m).loading,r=(0,vn.useState)(!1),o=(0,fn.Z)(r,2),a=o[0],d=o[1],p=(0,vn.useState)(null),x=(0,fn.Z)(p,2),l=x[0],s=x[1],h=(0,vn.useState)(null),c=(0,fn.Z)(h,2),g=c[0],u=c[1],m=(0,vn.useState)(!1),f=(0,fn.Z)(m,2),w=f[0],b=f[1],v=(0,vn.useRef)(null),Z=(0,Zn.s0)(),k=(0,jn.I0)(),j=(0,jn.v9)(it.Qo),y=(0,jn.v9)(rt.A4),P=(0,vn.useState)(!1),z=(0,fn.Z)(P,2),C=z[0],S=z[1],A=(0,vn.useState)(!1),E=(0,fn.Z)(A,2),U=E[0],L=E[1],T=(0,vn.useState)(null),q=(0,fn.Z)(T,2),B=q[0],D=q[1],_=(0,vn.useState)(j),I=(0,fn.Z)(_,2),M=I[0],R=I[1],H=(0,vn.useState)(!1),X=(0,fn.Z)(H,2),N=X[0],O=X[1],Q=(0,vn.useState)("All books"),V=(0,fn.Z)(Q,2),F=V[0],G=V[1],J=(0,yn.cI)({resolver:(0,Pn.X)(at)}),K=J.register,W=J.handleSubmit,Y=J.formState.errors,$=J.reset,nn=function(){d(!a)},en=function(n){v.current&&!v.current.contains(n.target)&&d(!1)},tn=function(n){"Escape"===n.key&&d(!1)},rn=function(){var n=(0,mn.Z)(bn().mark((function n(){var t,i;return bn().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,e();case 3:k((0,et.cq)()),k({type:"bookLS/clearBookLS"}),localStorage.clear(),Z("/login"),n.next=12;break;case 9:n.prev=9,n.t0=n.catch(0),s((null===(t=n.t0.response)||void 0===t||null===(i=t.data)||void 0===i?void 0:i.message)||"Logout failed. Please try again.");case 12:case"end":return n.stop()}}),n,null,[[0,9]])})));return function(){return n.apply(this,arguments)}}(),on=(0,vn.useCallback)((function(n){if("All books"===n)R(j);else{var e=j.filter((function(e){return"Unread"===n?"unread"===e.status:"In progress"===n?"in-progress"===e.status:"Done"!==n||"done"===e.status}));R(e)}}),[j]),an=function(n){G(n),O(!1),on(n)};(0,vn.useEffect)((function(){return document.addEventListener("mousedown",en),document.addEventListener("keydown",tn),function(){document.removeEventListener("mousedown",en),document.removeEventListener("keydown",tn)}}),[]);var dn=function(){var n=(0,mn.Z)(bn().mark((function n(e){var i,r;return bn().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,Nn.So)(e,t.token);case 3:if(!(i=n.sent).success){n.next=12;break}return S(!0),n.next=8,(0,Nn.XT)(t.token);case 8:(r=n.sent).success&&k((0,it.Ov)(r.data)),n.next=13;break;case 12:s(i.message);case 13:n.next=18;break;case 15:n.prev=15,n.t0=n.catch(0),s("An unexpected error occurred.");case 18:case"end":return n.stop()}}),n,null,[[0,15]])})));return function(e){return n.apply(this,arguments)}}(),pn=function(){var n=(0,mn.Z)(bn().mark((function n(){var e;return bn().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(L(!1),!B){n.next=6;break}return n.next=4,mt(B._id,t.token);case 4:(e=n.sent).success?(s(e.data.message),k((0,it.o0)(B._id))):s(e.message);case 6:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();return(0,vn.useEffect)((function(){j&&on(F)}),[j,F,on]),(0,Rn.jsxs)(On,{children:[l&&(0,Rn.jsx)(tt.Z,{message:l,onClose:function(){return s(null)}}),C&&(0,Rn.jsx)(Xn.Z,{onClose:function(){return S(!1)}}),U&&(0,Rn.jsx)(gt,{book:B,onClose:function(){return L(!1)},onDelete:pn}),(0,Rn.jsxs)(Qn,{children:[(0,Rn.jsx)(Gn,{src:Xe.Z,mobilesrc:He.Z,alt:"logo"}),(0,Rn.jsxs)(Vn,{children:[(0,Rn.jsx)(kn.rU,{to:"/recommended",children:(0,Rn.jsx)(Fn,{isActive:!1,children:"Home"})}),(0,Rn.jsx)(kn.rU,{to:"/library",children:(0,Rn.jsx)(Fn,{isActive:!0,children:"My Library"})})]}),(0,Rn.jsxs)(Jn,{children:[(0,Rn.jsx)(Kn,{children:null!==t&&void 0!==t&&t.name?t.name.charAt(0).toUpperCase():"U"}),(0,Rn.jsx)(Wn,{children:(null===t||void 0===t?void 0:t.name)||"User"}),(0,Rn.jsx)(Yn,{onClick:rn,children:"Log out"}),(0,Rn.jsx)($n,{src:Oe.Z,alt:"user menu",onClick:nn})]})]}),(0,Rn.jsx)(ge,{isvisible:a.toString(),onClick:nn}),(0,Rn.jsxs)(ue,{ref:v,isvisible:a.toString(),children:[(0,Rn.jsx)(fe,{onClick:nn,children:(0,Rn.jsx)("img",{src:In.Z,alt:"Close"})}),(0,Rn.jsxs)(Vn,{children:[(0,Rn.jsx)(kn.rU,{to:"/recommended",children:(0,Rn.jsx)(Fn,{isActive:!1,children:"Home"})}),(0,Rn.jsx)(kn.rU,{to:"/library",children:(0,Rn.jsx)(Fn,{isActive:!0,children:"My Library"})})]}),(0,Rn.jsx)(me,{onClick:rn,children:"Log out"})]}),(0,Rn.jsxs)(ne,{children:[(0,Rn.jsxs)(ee,{children:[(0,Rn.jsxs)(te,{children:[(0,Rn.jsx)(ie,{children:"Create your library:"}),(0,Rn.jsxs)("form",{onSubmit:W(dn),children:[(0,Rn.jsxs)(re,{children:[(0,Rn.jsx)(Be,(0,un.Z)({type:"text",name:"title",placeholder:"Book title"},K("title"))),Y.title&&(0,Rn.jsx)(De,{children:Y.title.message})]}),(0,Rn.jsxs)(re,{children:[(0,Rn.jsx)(Be,(0,un.Z)({type:"text",name:"author",placeholder:"The author"},K("author"))),Y.author&&(0,Rn.jsx)(De,{children:Y.author.message})]}),(0,Rn.jsxs)(re,{children:[(0,Rn.jsx)(Be,(0,un.Z)({type:"text",name:"totalPages",placeholder:"Number of pages"},K("totalPages"))),Y.totalPages&&(0,Rn.jsx)(De,{children:Y.totalPages.message})]}),(0,Rn.jsx)(oe,{type:"submit",children:"Add book"})]})]}),(0,Rn.jsxs)(ae,{children:[(0,Rn.jsx)(de,{children:"Recommended books"}),(0,Rn.jsx)(we,{children:i&&0===j.length?(0,Rn.jsx)(zn.Z,{}):y.slice(0,3).map((function(n){return(0,Rn.jsxs)(be,{onClick:function(){return function(n){$(n)}(n)},children:[n.imageUrl?(0,Rn.jsx)(ve,{src:n.imageUrl,alt:n.title}):(0,Rn.jsx)(ve,{src:Mn,alt:"Book cover is not available"}),(0,Rn.jsxs)(Ze,{children:[(0,Rn.jsx)(ke,{children:n.title}),(0,Rn.jsx)(je,{children:n.author})]})]},n._id)}))}),(0,Rn.jsxs)(pe,{onClick:function(){return Z("/recommended")},children:[(0,Rn.jsx)(xe,{children:"Home"}),(0,Rn.jsx)(le,{src:Ne.Z,alt:"left arrow"})]})]})]}),(0,Rn.jsxs)(se,{children:[(0,Rn.jsxs)(he,{children:[(0,Rn.jsx)(ce,{children:"My library"}),(0,Rn.jsxs)(_e,{children:[(0,Rn.jsxs)(Ie,{onClick:function(){O(!N)},children:[F,(0,Rn.jsx)("img",{src:N?wt:ft,alt:N?"chevron up":"chevron down"})]}),N&&(0,Rn.jsxs)(Me,{children:[(0,Rn.jsx)(Re,{onClick:function(){return an("Unread")},children:"Unread"}),(0,Rn.jsx)(Re,{onClick:function(){return an("In progress")},children:"In progress"}),(0,Rn.jsx)(Re,{onClick:function(){return an("Done")},children:"Done"}),(0,Rn.jsx)(Re,{onClick:function(){return an("All books")},children:"All books"})]})]})]}),i?(0,Rn.jsx)(zn.Z,{}):0===M.length?(0,Rn.jsxs)(Le,{children:[(0,Rn.jsx)(Te,{}),(0,Rn.jsxs)(qe,{children:["To start training, add ",(0,Rn.jsx)("span",{children:"some of your books"})," or from the recommended ones."]})]}):(0,Rn.jsx)(ye,{children:M.map((function(n){return(0,Rn.jsxs)(Pe,{children:[n.imageUrl?(0,Rn.jsx)(ze,{onClick:function(){return function(n){u(n),b(!0)}(n)},src:n.imageUrl,alt:n.title}):(0,Rn.jsx)(ze,{src:Mn,alt:"Book cover is not available"}),(0,Rn.jsxs)(Ce,{children:[(0,Rn.jsxs)(Se,{children:[(0,Rn.jsx)(Ae,{children:n.title}),(0,Rn.jsx)(Ee,{children:n.author})]}),(0,Rn.jsx)(Ue,{src:Ye,alt:"red basket",onClick:function(){return function(n){D(n),L(!0)}(n)}})]})]},n._id)}))})]})]}),w&&(0,Rn.jsx)(Hn,{book:g,onClose:function(){b(!1)}})]})}}}]);
//# sourceMappingURL=622.ae7ff5e9.chunk.js.map
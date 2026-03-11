function form() {
    const a=document.member;
    const reg_exp=new RegExp("^(?=.*[a-zA-Z]).{6,15}$");
    const match=reg_exp.exec(a.id.value);
    if(match==null){
         alert("아이디를 6글자 이상 입력하세요.")
         return false;
    }

    const reg_exp1=new RegExp("^(?=.*[0-9]).{8,20}$");
    const match1=reg_exp1.exec(a.pwd1.value);
    if(match1==null){
        alert("비밀번호를 8~20자 이내의 비밀번호를 입력하세요.")
        return false;
    }

    const b1=document.forms["member"]["pwd1"].value;
    const b2=document.forms["member"]["pwd2"].value;
    if (b1!=b2) {
        alert("비밀번호가 일치하지 않습니다.")
        return false;
    }

    const c=document.forms["member"]["name"].value;
    if (c==null || c=="") {
        alert("이름을 입력하세요.");
        return false;
    }

    const d=document.forms["member"]["phone"].value;
    if (d==null || d==""){
        alert("전화번호를 입력하세요.")
        return false;
    }

    const e=document.forms["member"]["email"].value;
    if (e==null || e=="") {
        alert("이메일을 입력하세요.")
        return false;
    }

    const f=document.forms["member"]["adress"].value;
    if (f==null || f=="") {
        alert("주소를 입력하세요.")
        return false;
    }

    alert("폼 제출 성공! (테스트용, PHP 없이 동작)");
    document.member.reset();
    return false;
}
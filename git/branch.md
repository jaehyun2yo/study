# HEAD 포인터

HEAD 는 현재 체크아웃된 브랜치의 가장 최신커밋을 가르킵니다.

따라서 브랜치 를 변경하게되면, 변경한 브랜치의 가장 최신 커밋을 가리키게 됩니다. 

**✨  정리하자면 현재 Checkout 된 브랜치를 가르키는 포인터 입니다.**

# branch

독립적으로 어떤 작업을 진행하기 위한 개념입니다.

필요에의해 만들어지는 각각의 브랜치는 다른 브랜치의 영향을 받지 않기때문에 여러작업을 동시에 진행할수있습니다.

**✨ 예를들어 무료버전 , 유료버전 을 나눠서 개발할때 사용합니다.**

# HEAD 와 branch 가 가르키는 것

HEAD는 브랜치를 가르킵니다

브랜치는 해당 브랜치의 최신 커밋을 가르킵니다.

다른 브랜치로 이동하고싶을때는 checkout 을 사용합니다.

![스크린샷 2022-03-22 오후 2.26.56.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/a0fda626-b137-47b9-a2a4-9ef1e51b9069/스크린샷_2022-03-22_오후_2.26.56.png)

### marge

<aside>
💡 HEAD 가 가리키던 커밋에 다른 branch가 가르키던 커밋을 합쳐서 새로운 커밋을 만드는작업
다른 branch 를 병합할때 사용

</aside>

- 내용보기
    
    현재있는 branch 상태에서 premium branch 를 marge 하려고한다면
    
    -git  merge premium 
    
    을 적으면 된다.
    

### Conflict

<aside>
💡 branch 를 marge 시 서로다른내용이있으면 충돌 발생

</aside>

- 내용보기
    
    
    ![스크린샷 2022-03-22 오후 12.32.36.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/e1014a64-37fa-48b5-9998-002f3a7175bf/스크린샷_2022-03-22_오후_12.32.36.png)
    
    **Conflict 해결방법** 
    
    confilct 가 발생한 파일을 열어 marge의 결과가 되었으면 하는 코드로 수정한뒤 커밋하면 해결된다.
    
    다수의 파일이 conflict 가 생길시 다수의 파일을 해결방법대로 적용하면된다.
    
    만약 marge 작업을 취소하려면 아래커맨드를 입력하면 된다
    
    ![스크린샷 2022-03-22 오후 12.45.45.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/ec17410d-ae29-4abe-8a70-2db4cf89803f/스크린샷_2022-03-22_오후_12.45.45.png)
    
    **marge —abort**
    

# 정리

- **git branch [새 브랜치 이름]** : 새로운 브랜치를 생성
- **git checkout -b [새 브랜치 이름]** : 새로운 브랜치를 생성하고 그 브랜치로 바로 이동
- **git branch -d [기존 브랜치 이름]** : 브랜치 삭제
- **git checkout [기존 브랜치 이름]** : 그 브랜치로 이동
- **git merge [기존 브랜치 이름]** : 현재 브랜치에 다른 브랜치를 머지
- **git merge --abort** : 머지를 하다가 conflict가 발생했을 때, 일단은 머지 작업을 취소하고 이전 상태로 돌아감

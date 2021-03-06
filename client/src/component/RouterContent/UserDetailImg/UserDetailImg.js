import React from "react"

import {Route} from "react-router-dom";
import { useState } from 'react';


const UserDetailImg = ({state,dispatchFun,dispatchFunTwo,manyFunc,func})=>{

    const[inputEng,inputEditEng]=useState([
        {inputEng:""}
    ])
    const[inputRus,inputEditRus]=useState([
        {inputRus:""}
    ])
    const[inputImg,inputEditImg]=useState([
        {inputImg:""}
    ])
    const popUpAddImg = ()=>{
        let popUp = document.querySelector(".DetailedImg-popUp")
        popUp.style.display = "flex"

    }
    const popUpAddImgClose = ()=>{
        let popUp = document.querySelector(".DetailedImg-popUp")
        popUp.style.display = "none"

    }
    const addCategories = (input)=>{

        const url = "/api/addCategories"
        dispatchFun(url,{
            nameEng: inputEng,
            textRus:inputRus,
            inputImg:inputImg,
            email:state.email
        },false)
        dispatchFunTwo("/api/userGet",{
            email:state.email
        })
    }
    const viewBox = (categories)=> {
        return Object.values(categories).map(e=>{
            return (
                <Route key={e.id} render={({history}) => (

                    <div  onClick={() => {
                        manyFunc(state._id,e.name)

                        history.push(`/user/${state._id}/${e.name}`)}}>
                        <div  className="img-block_box">
                            <div className="img-block_box__img">
                                <img src={e.home} alt=""/>
                            </div>
                            <div className="img-block_box__text">
                                <p>{e.text}</p>
                            </div>
                        </div>
                    </div>
                )}/>

            )
        })




    }
    return (
        <>
            <div className="img">
                {/*<div   className="DetailedImg-popUp">*/}
                {/*    <div className="DetailedImg-popUp_block">*/}
                {/*        <div className="DetailedImg-popUp_block__input"><p>Названия Категори на АНГ:</p><input onChange={event=>inputEditEng(event.target.value)} type="text"/></div>*/}
                {/*        <div className="DetailedImg-popUp_block__input"><p>Названия Категори на Русс:</p><input onChange={event=>inputEditRus(event.target.value)} type="text"/></div>*/}
                {/*        <div className="DetailedImg-popUp_block__input"><p>Картинка подходящая под категорию:</p><input onChange={event=>inputEditImg(event.target.value)} type="text"/></div>*/}
                {/*        <button onClick={()=>addCategories(inputEditEng,inputEditRus,inputEditImg)}>*/}
                {/*            Добавть Категорию*/}
                {/*        </button>*/}
                {/*        <div className="DetailedImg-popUp_block__close" onClick={()=>popUpAddImgClose()} >X</div>*/}
                {/*    </div>*/}
                {/*</div>*/}
                <div className="img-block">
                    {viewBox(state.categories)}
                    {/*<div onClick={()=>popUpAddImg()} className="img-block_box">*/}
                    {/*    <div className="img-block_box__text">*/}
                    {/*        <p>Добавить категорию</p>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                </div>
            </div>
        </>
    )

}
export default UserDetailImg
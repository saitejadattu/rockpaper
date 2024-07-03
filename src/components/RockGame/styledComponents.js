import styled from 'styled-components'
import {RiCloseLine} from 'react-icons/ri'
export const Div = styled.div`
    height:${props => (props.height ? props.height : '')};
    width:${props => (props.width ? props.width : '')};
    background-color:${props => (props.bgColor ? props.bgColor : '')};
    display:${props => (props.display ? props.display : '')};
    flex-direction:${props => (props.fd ? props.fd : '')};
    justify-content:${props => (props.jc ? props.jc : '')};
    align-items:${props => (props.al ? props.al : '')};
    align-self:${props => (props.as ? props.as : '')};
    border-radius:${props => (props.br ? props.br : '')}px;
    border-color:${props => (props.bc ? props.bc : '')};
    border-width:${props => (props.bw ? props.bw : '')}px;
    border-style:${props => (props.bs ? props.bs : '')};
    padding:${props => (props.p ? props.p : '')};
    padding-top:${props => (props.pt ? props.pt : '')};
    padding-left:${props => (props.pl ? props.pl : '')};
    padding-right:${props => (props.pr ? props.pr : '')};
    padding-bottom:${props => (props.pb ? props.pb : '')};
    margin-top:${props => (props.mt ? props.mt : '')};
`
export const Heading = styled.h1`
    color:${props => (props.color ? props.color : '')};
    font-size:${props => (props.fs ? props.fs : '')};
    font-weight:${props => (props.fw ? props.fw : '')};
    font-family:${props => (props.ff ? props.ff : '')};
    margin-bottom:${props => (props.mb ? props.mb : '')};
    padding-bottom:${props => (props.pb ? props.pb : '')};
    margin-top:${props => (props.mt ? props.mt : '')};
    padding-top:${props => (props.pt ? props.pt : '')};
    align-self:${props => (props.as ? props.as : '')};
    align-items:${props => (props.al ? props.al : '')};
`
export const Para = styled.p`
    color:${props => (props.color ? props.color : '')};
    font-size:${props => (props.fs ? props.fs : '')};
    font-weight:${props => (props.fw ? props.fw : '')};
    font-family:${props => (props.ff ? props.ff : '')};
    align-self:${props => (props.as ? props.as : '')};
    align-items:${props => (props.al ? props.al : '')};
`
export const Ul = styled.ul`
    list-style-type:none;
    margin-left:0px;
    padding-left:0px;
    flex-wrap:wrap;
    display:flex;
    justify-content:center;
    width:500px;

`
export const Li = styled.li`
    margin:30px;
    align-items:center;
`
export const Image = styled.img`
    height:${props => (props.height ? props.height : '')};
    width:${props => (props.width ? props.width : '')};
    background-color:${props => (props.bgColor ? props.bgColor : '')};
    display:${props => (props.display ? props.display : '')};
    flex-direction:${props => (props.fd ? props.fd : '')};
    justify-content:${props => (props.jc ? props.jc : '')};
    align-items:${props => (props.al ? props.al : '')};
    align-self:${props => (props.as ? props.as : '')};
    border-radius:${props => (props.br ? props.br : '')}px;
    border-color:${props => (props.bc ? props.bc : '')};
    border-width:${props => (props.bw ? props.bw : '')}px;
    border-style:${props => (props.bs ? props.bs : '')};
    padding:${props => (props.p ? props.p : '')};
    padding-top:${props => (props.pt ? props.pt : '')};
    padding-left:${props => (props.pl ? props.pl : '')};
    padding-right:${props => (props.pr ? props.pr : '')};
    padding-bottom:${props => (props.pb ? props.pb : '')};
`
export const DivGame = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
`
export const Button = styled.button`
    border-radius:5px;
    background-color:white;
    padding:10px;
    color:#223a5f;
    font-weight:600;
    border-width:0px;
    align-self:flex-end;
    background-color:${props => (props.bgColor ? props.bgColor : '')};
    border-width:${props => (props.bw ? props.bw : '')};
`
export const BtnDiv = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:flex-end;
`
export const PopupDiv = styled.div`
    background-color:white;
    padding:10px;
    display:flex;
    flex-direction:column;
`
export const RiCloseLineIcon = styled(RiCloseLine)`
    align-self:flex-end;
`

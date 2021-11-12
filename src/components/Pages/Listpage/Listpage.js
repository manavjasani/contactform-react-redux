import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Modal from '../../Modal/Modal';
import { useDispatch } from 'react-redux';
import "./Listpage.css";
import { deleteAction } from '../../../store/actions/submitList';
import { useNavigate } from 'react-router-dom';

const Listpage = () => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [formDetail, setFormDetail] = useState(false);
    const [editDetail, setEditDetail] = useState(null);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('https://contact-list-3fa22-default-rtdb.firebaseio.com/condata.json')
            .then(res => {
                let dataArr = [];
                const resData = res.data;
                console.log(resData);
                for (let key in resData) {
                    console.log(resData[key]);
                    dataArr.push({id: key, data: resData[key]});
                    setIsLoading(false);
                }
                // console.log(dataArr)
                setData(dataArr);
            }).catch(err => {
                console.log(err)
                setIsLoading(false);
            });
    }, [])

    if (isLoading) {
        return <h2 className="load-text">...Loading</h2>
    }

    const deleteItemHandler = (id) => {
        // const remItem = data.filter((item) => item.id !== id)
        // setData(remItem);
        dispatch(deleteAction(id))
        navigate('/')
    }

    const editItemHandler = (item) => {
        setFormDetail(!formDetail)
        setEditDetail(item)
    }

    return (
        <div>
            <h1 className="contact-list_head">Contact-list</h1>
            {formDetail && 
                <div className="Modal-cont">
                    <Modal data={editDetail} />
                </div>}
            {data.map((item) => {
                return <div key={item.id} className="contact-list_cont">
                            <div>
                                <h2>{item.data.name}</h2>
                                <h3>{item.data.age}</h3>
                            </div>
                            <div>
                                <h2>{item.data.email}</h2>
                                <h3>{item.data.contact}</h3>
                            </div>
                            <div className="btn-cont">
                                <button onClick={() => editItemHandler(item)} className="edit-btn">Edit</button>
                                <button onClick={() => deleteItemHandler(item.id)} className="del-btn">Delete</button>
                            </div>
                        </div>
            })}
            
        </div>
    )
}

export default Listpage;
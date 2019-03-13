import React, { Component } from 'react';
import { connect } from 'react-redux';

import style from '../CSS/PicSelectorPage.module.css';
import Img from './Img';
import * as actiontypes from '../../store/actions/actiontypes';




class PicSelectorPage extends Component {
    state = {
        pics: {
            1: {
                src: 'https://thenypost.files.wordpress.com/2018/10/102318-dogs-color-determine-disesases-life.jpg?quality=90&strip=all&w=618&h=410&crop=1'
            },
            2: {
                src: 'https://www.petmd.com/sites/default/files/Acute-Dog-Diarrhea-47066074.jpg'
            },
            3:  {
                src: 'https://pbs.twimg.com/profile_images/1046968391389589507/_0r5bQLl_400x400.jpg'
            },
            4: {
                src: 'https://i.kym-cdn.com/entries/icons/facebook/000/010/346/gdggfjjgfjgfgg.jpg'
            },
            5: {
                src: 'https://i.barkpost.com/wp-content/uploads/2015/10/reddit-dog-jokes-20.jpg?q=70&fit=crop&crop=entropy&w=808&h=808'
            },
            6: {
                src: 'http://cdn.akc.org/content/article-body-image/funny-basset_hound_yawning.jpg'
            },
            7: {
                src: 'https://www.pspca.org/sites/default/files/styles/pspca_banner/public/2017-07/34719489134_2eb736aab8_o.jpg?h=2edb335a&itok=YkhiwaEL'
            },
            8: {
                src: 'http://cdn.akc.org/content/article-body-image/funny-golden_retriever_raincoat_.jpg'
            }            
        }
    }
 
    render () {
        const postPics = [];
        const images = [];

        for (let key in this.state.pics) {
            postPics.push({
                id: key,
                config: this.state.pics[key]
            });
        }
        postPics.forEach(element => {
            images.push(
            <Img key={element.id}>
                    <img 
                        onClick={(event) => this.props.onPicSelected(event.target.getAttribute('src'))}
                        src= {element.config.src}
                        alt=''
                    />
            </Img>
            )        
        });

        return(
            <div>
                    <div className={style.grid}>
                        <div className={style.selectedPic}><img src={this.props.selectedImage}/></div>
                        <div className={style.imageGallery}>{images}</div>               
                    </div>
            </div>
        )
    }    
};

const mapStateToProps = state => {
    return {
        selectedImage: state.newPostImage.src
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onPicSelected: (pic) => dispatch({type: actiontypes.NEW_POST_IMAGE, pic: pic})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PicSelectorPage);
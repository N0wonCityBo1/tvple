import React from "react";

import ReactPlayer from 'react-player/lazy';


import styled from 'styled-components';

import 'bootstrap/dist/css/bootstrap.min.css';


const Video = ({link}) => {
    return (
        <>
            
            <div className='player-wrapper'  >
                <ReactPlayer
                    className='react-player'
                    url={link}    // 플레이어 url
                    width='800px'         // 플레이어 크기 (가로)
                    height='500px'        // 플레이어 크기 (세로)
                    playing={true}        // 자동 재생 on
                    muted={true}          // 자동 재생 on
                    controls={true}       // 플레이어 컨트롤 노출 여부
                    light={false}         // 플레이어 모드
                    pip={true}            // pip 모드 설정 여부
                    poster={'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/BigBuckBunny.jpg'}   // 플레이어 초기 포스터 사진
                      // 플레이어 끝났을 때 이벤트
                />
            </div>
        </>
    )
}

export default Video;
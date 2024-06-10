import {GithubOutlined} from "@ant-design/icons";

export function About (){
    return(
        <>
            <div className="about">
                <GithubOutlined />
                <span>Markus ©{new Date().getFullYear()} Created by Group 4</span>
            </div>
        </>
    )
}
import React from "react";
import { routes } from "./router";
import { Switch, Route } from "react-router-dom";
import { Layout } from "antd";
import Header from "./component/header";
import Footer from "./component/footer";
import "./static/css/base.css";
function App() {
    return <Layout className="layout">
        <Header/>
        <Layout.Content className="layout-content">
            <Switch>
                {
                    routes.map((link, index) => {
                        return <Route
                            path={link.path}
                            exact={link.exact}
                            render={(props) => {
                                return link.render(props);
                            }}
                            key={index}
                        />
                    })
                }
            </Switch>
        </Layout.Content>
        <Footer/>
    </Layout>
}

export default App;
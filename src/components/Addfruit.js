import React, {
    Component,
    Fragment
} from 'react'
import {
    Button,
    Modal,
    Form,
    Input
} from 'antd';
import Axios from 'axios'
const qs = require('qs');

const FormItem = Form.Item;

class RegistrationForm extends Component {

    constructor(props) {
        super(props)
        this.state = {
            loading: false,
            visible: false,

            confirmDirty: false,
            autoCompleteResult: [],
        }

    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                // 使用post 请求，变成 options 请求  ；使用 JSON.stringify(values) 转化
                Axios.post('http://localhost:3030/addFruits', qs.stringify(values))
                    .then((res) => {
                        if (res.status == 200) {
                            this.setState({
                                visible: false
                            });
                        }
                    })
                    .catch((err) => {
                        console.log(err);
                    });

            }
        });
    }

    showModal = () => {
        this.setState({
            visible: true,
        });
    }

    handleOk = () => {
        this.setState({
            loading: true
        });
        setTimeout(() => {
            this.setState({
                loading: false,
                visible: false
            });
        }, 3000);
    }

    handleCancel = () => {
        this.setState({
            visible: false
        });
    }

    render() {
        const {
            visible,
            // loading
        } = this.state;


        const {
            getFieldDecorator
        } = this.props.form;


        const formItemLayout = {
            // 
            labelCol: {
                xs: {
                    span: 24
                },
                sm: {
                    span: 4
                },
            },
            wrapperCol: {
                xs: {
                    span: 24
                },
                sm: {
                    span: 16
                },
            },
        };
        const tailFormItemLayout = {
            wrapperCol: {
                xs: {
                    span: 24,
                    offset: 0,
                },
                sm: {
                    span: 16,
                    offset: 8,
                },
            },
        };
        return (
            <Fragment>
                <Button type="primary" onClick={this.showModal}> Add Fruit </Button>
                <Modal visible={visible} title="Title" onOk={this.handleOk} onCancel={this.handleCancel} maskClosable = 'false' footer={[  ]} >
                    <Form onSubmit={this.handleSubmit}>
                        <FormItem {...formItemLayout} label="名称" >
                          {getFieldDecorator('name', {
                            rules: [{required: true}],
                          })(
                            <Input />
                          )}
                        </FormItem>
                        <FormItem {...formItemLayout} label="单价"  >
                          {getFieldDecorator('price', {
                            rules: [{ required: true }],
                          })(
                            <Input type="text" />
                          )}
                        </FormItem>
                        <FormItem {...formItemLayout} label="数量" >
                          {getFieldDecorator('quantity', {
                            rules: [{ required: true }],
                          })(
                            <Input type="text"/>
                          )}
                        </FormItem>
                        <FormItem {...tailFormItemLayout}>
                           <Button onClick={this.handleCancel}>取消</Button>
                           <Button type="primary" htmlType="submit">添加</Button>
                        </FormItem>
                      </Form>
                </Modal>
            </Fragment>
        );
    }
}


const Addfruit = Form.create()(RegistrationForm);

export default Addfruit
import type {ActionType, ProColumns} from '@ant-design/pro-components';
import {ProTable, TableDropdown} from '@ant-design/pro-components';
import React, {useRef} from 'react';
import {deleteUser, searchUsers} from '@/services/ant-design-pro/api';
import {Image} from 'antd';

const columns: ProColumns<API.CurrentUser>[] = [
    {
        dataIndex: 'id',
        valueType: 'indexBorder',
        width: 48,
    },
    {
        title: '用户名',
        dataIndex: 'username',
        copyable: true,
    },
    {
        title: '用户账户',
        dataIndex: 'userAccount',
        copyable: true,
    },
    {
        title: '头像',
        dataIndex: 'avatarUrl',
        render: (_, record) => (
            <div>
                <Image src={record.avatarUrl} width={100}></Image>
            </div>
        ),
    },
    {
        title: '性别',
        dataIndex: 'gender',
        valueType: 'select',
        valueEnum: {
            0: {text: '男',},
            1: {text: '女',},
        },
    },
    {
        title: '电话',
        dataIndex: 'phone',
        copyable: true,
    },
    {
        title: '邮件',
        dataIndex: 'email',
        copyable: true,
    },
    {
        title: '状态',
        dataIndex: 'userStatus',
        valueType: 'select',
        valueEnum: {
            0: {text: '正常', status: 'success'},
            1: {text: '违规', status: 'Default',},

        },
    },
    {
        title: '角色',
        dataIndex: 'userRole',
        valueType: 'select',
        valueEnum: {
            0: {text: '普通用户', status: 'Default'},
            1: {
                text: '管理员',
                status: 'Success',
            },
        },
    },
    {
        title: '创建时间',
        dataIndex: 'createTime',
        valueType: 'dateTime',

    },
//todo 实现操作按钮功能
    {
        title: '操作',
        valueType: 'option',
        key: 'option',
        render: (text, record, _, action) => [
            <a
                key="editable"
                onClick={() => {
                    action?.startEditable?.(record.id);
                }}
            >
                编辑
            </a>,
            <a href={record.avatarUrl} target="_blank" rel="noopener noreferrer" key="view">
                查看头像
            </a>,
            <TableDropdown
                key="actionGroup"
                onSelect={() => {
                    deleteUser(record.id)
                }}
                // onSelect={() => action?.reload()}
                menus={[
                    {key: 'copy', name: '复制'},
                    {key: 'delete', name: '删除'},
                ]}
            />,
        ],
    },
];

export default () => {
    const actionRef = useRef<ActionType>();
    return (
        <ProTable<API.CurrentUser>
            columns={columns}
            actionRef={actionRef}
            cardBordered
            request={async (params = {}, sort, filter) => {
                console.log(sort, filter);
                const userList = await searchUsers();
                return {
                    data: userList,
                };
            }}
            editable={{
                type: 'multiple',
            }}
            columnsState={{
                persistenceKey: 'pro-table-singe-demos',
                persistenceType: 'localStorage',
                onChange(value) {
                    console.log('value: ', value);
                },
            }}
            rowKey="id"
            search={{
                labelWidth: 'auto',
            }}
            options={{
                setting: {
                    listsHeight: 400,
                },
            }}
            form={{
                // 由于配置了 transform，提交的参与与定义的不同这里需要转化一下
                syncToUrl: (values, type) => {
                    if (type === 'get') {
                        return {
                            ...values,
                            created_at: [values.startTime, values.endTime],
                        };
                    }
                    return values;
                },
            }}
            pagination={{
                pageSize: 5,
                onChange: (page) => console.log(page),
            }}
            dateFormatter="string"
            headerTitle="用户列表"
            toolBarRender={() => []}
        />
    );
};

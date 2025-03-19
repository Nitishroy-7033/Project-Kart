import { useEffect, useState } from "react";
import "./style.css";
import Search from "antd/es/input/Search";
import { BiDownload, BiRefresh } from "react-icons/bi";
import { CgAdd } from "react-icons/cg";
import { render } from "@testing-library/react";
const { Layout, Table, Row, Slider, Switch, Select, Input, Button } = require("antd");

const columns = [
  {
    title: "ID",
    dataIndex: "name",
    sorter: true,
    render: (name) => `${name.first} ${name.last}`,
    width: "20%",
  },
  {
    title: "Name",
    dataIndex: "gender",
    filters: [
      {
        text: "Male",
        value: "male",
      },
      {
        text: "Female",
        value: "female",
      },
    ],
    width: "20%",
  },
  {
    title: "Category",
    dataIndex: "email",
  },
  {
    title: "Rating",
    dataIndex: "email",
  },
  {
    title: "Selling",
    dataIndex: "email",
  },
  {
    title: "Actions",
    dataIndex: "email",
    render:()=>{
      <div>button</div>
    }
  },
];
const toURLSearchParams = (record) => {
  const params = new URLSearchParams();
  for (const [key, value] of Object.entries(record)) {
    params.append(key, value);
  }
  return params;
};
const getRandomuserParams = (params) => ({
  results: params.pagination?.pageSize,
  page: params.pagination?.current,
  ...params,
});
const AdminProductsPage = () => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const [tableParams, setTableParams] = useState({
    pagination: {
      current: 1,
      pageSize: 10,
    },
  });
  const params = toURLSearchParams(getRandomuserParams(tableParams));
  const fetchData = () => {
    setLoading(true);
    fetch(`https://randomuser.me/api?${params.toString()}`)
      .then((res) => res.json())
      .then(({ results }) => {
        setData(results);
        setLoading(false);
        setTableParams({
          ...tableParams,
          pagination: {
            ...tableParams.pagination,
            total: 200,
          },
        });
      });
  };
  useEffect(fetchData, [
    tableParams.pagination?.current,
    tableParams.pagination?.pageSize,
    tableParams?.sortOrder,
    tableParams?.sortField,
    JSON.stringify(tableParams.filters),
  ]);
  const handleTableChange = (pagination, filters, sorter) => {
    setTableParams({
      pagination,
      filters,
      sortOrder: Array.isArray(sorter) ? undefined : sorter.order,
      sortField: Array.isArray(sorter) ? undefined : sorter.field,
    });

    // `dataSource` is useless since `pageSize` changed
    if (pagination.pageSize !== tableParams.pagination?.pageSize) {
      setData([]);
    }
  };
  return (
    <Layout
      style={{
        minHeight: "100vh",
      }}
    >
      <Row 
      justify={"space-between"}
      align={"middle"} className="table-header-button-container">
        <Row 
        align={"middle"}
        style={{
          gap:"20px"
        }}>
        <Row
          style={{
            gap: "10px",
          }}
        >
          Active
          <Switch size={"8px"}></Switch>
        </Row>

        <Select
        size="large"
          defaultValue="lucy"
          style={{
            width: 120,
          }}
          options={[
            {
              value: "jack",
              label: "Jack",
            },
            {
              value: "lucy",
              label: "Lucy",
            },
            {
              value: "Yiminghe",
              label: "yiminghe",
            },
            {
              value: "disabled",
              label: "Disabled",
              disabled: true,
            },
          ]}
        />

        <Search size="large" placeholder="input search text" style={{ width: 300 }} />
        <div className="icon-button"><BiRefresh/></div>
        <Button ><BiDownload/>Export</Button>

        </Row>
        <Row>
          <Button>
            <CgAdd/>
            Add New
          </Button>

        </Row>
      </Row>
      <Table
        columns={columns}
        rowKey={(record) => record.login.uuid}
        dataSource={data}
        pagination={tableParams.pagination}
        loading={loading}
        onChange={handleTableChange}
      />
    </Layout>
  );
};

export default AdminProductsPage;

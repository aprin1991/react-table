import Button from "./components/button";
import Table from "./components/table";

const column = [
  { id: 1, title: "Name" },
  { id: 2, title: "Email" },
  { id: 3, title: "Create at" },
  { id: 4, title: "Price" },
  { id: 5, title: "Actions" },
];

const App = () => {
  const rows = [
    {
      id: 1,
      data: [
        { id: 1, value: "Hamed" },
        { id: 2, value: "test@gmail.com" },
        { id: 3, value: "19 oct 2023" },
        { id: 4, value: "200$" },
        { id: 5, value: <Button /> },
      ],
    },
    {
      id: 2,
      data: [
        { id: 1, value: "Hamid" },
        { id: 2, value: "yahoo@gmail.com" },
        { id: 3, value: "19 Nov 2022" },
        { id: 4, value: "500$" },
        {
          id: 5,
          value: (
            <>
              <Button />
              <Button />
            </>
          ),
        },
      ],
    },
  ];
  return <Table columns={column} rows={rows} />;
};

export default App;

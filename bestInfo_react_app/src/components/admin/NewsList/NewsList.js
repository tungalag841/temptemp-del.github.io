import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import TablePagination from '@mui/material/TablePagination';
import { HotTable } from '@handsontable/react';
import { registerAllModules } from 'handsontable/registry';
import "handsontable/dist/handsontable.min.css";
import './NewsList.css';

registerAllModules();

const NewsList = ({ news }) => {
  const [pageValue, setPageValue] = useState({
    totalCount: news.length,
    pageSize: 25,
    siblingCount: 1,
    currentPage: 0,
  });

  const [settings, setSettings] = useState(() => {
    const initialState = {
      licenseKey: 'non-commercial-and-evaluation',
      data: news.slice([0], pageValue.pageSize),
      afterOnCellMouseUp: (event, coords, TD, rowHeaders) => {
        if (coords.col === 2) {
          click(
            hotTableComponent.current.hotInstance.getDataAtCell(coords.row, 0)
          );
        };
      },
      columns: [
        { data: 'id' },
        { data: 'title' },
        {
          readOnly: true,
          renderer: (instance, TD, row, col, prop, value, cellProperties) => {
            TD.innerHTML = `<button>ЗАСАХ/УСТГАХ</button>`
            return TD;
          }
        },
      ],
      colHeaders: ['Дд', 'Гарчиг', 'Засах/Устгах'],
      rowHeaders: false,
      stretchH: 'all',
      height: 'auto',
      width: '75vw',
    };
    return initialState;
  });
  const navigate = useNavigate();
  const hotTableComponent = useRef(null);

  const [page, setPage] = useState(pageValue.currentPage);
  const [rowsPerPage, setRowsPerPage] = useState(pageValue.pageSize);

  const handleChangePage = (event, newPage) => {
    setSettings({
      ...settings,
      data: news.slice([pageValue.pageSize * newPage], pageValue.pageSize * (newPage + 1)),

    });
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setPageValue({
      ...pageValue,
      pageSize: event.target.value
    });
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const click = (pointer) => {
    navigate(`/admin/newsedit/${pointer}`);
  }

  return (
    <div className='NewsList'>
      <div>
        МЭДЭЭ ЗАСАХ/УСТГАХ
      </div>
      {news.length &&
        <div>
          <HotTable
            settings={settings} ref={hotTableComponent} />
          <TablePagination
            component="div"
            count={Math.ceil(pageValue.totalCount / pageValue.pageSize) * pageValue.pageSize}
            page={page}
            onPageChange={handleChangePage}
            rowsPerPage={rowsPerPage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </div>
      }
    </div>
  );
};

export default NewsList;

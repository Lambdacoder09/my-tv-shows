import { BrowserRouter, Route, Routes } from "react-router-dom";
import ShowDetailPage from "./Pages/ShowDetails.Page";
import ShowListPage from "./Pages/ShowsList.Page";

function App() {
  return (
    <div className="min-h-screen bg-slate-100 text-slate-900">
      <BrowserRouter>
        <main className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <Routes>
            <Route path="/" element={<ShowListPage />} />
            <Route path="show/:show_id" element={<ShowDetailPage />} />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;

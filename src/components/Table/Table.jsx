export const Table = () => {
  return (
    <div className="text-white flex justify-between ">
      <table class="table w-full">
        <thead>

          <tr className="border-b border-[#EBECEC4D]">
            <th className="text-sm font-normal p-2">Trade Name</th>
            <th className="text-sm font-normal">Entry</th>
            <th className="text-sm font-normal">Current</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className="flex items-center">
                <div className="flex items-center justify-center">
                  <div className="w-12 h-16">
                    <img src="/images/buy.png" alt="buy" />
                  </div>
                  <div>
                    <h1 className="text-left">HDFCBANK</h1>
                    <p className="text-[0.7rem] font-normal">
                      Target: Rs3140 | S/L Rs3140
                    </p>
                  </div>
                </div>
              </div>
            </td>
            <td>Rs 3140</td>
            <td>Rs 3140</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

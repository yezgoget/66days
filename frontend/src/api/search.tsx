import api from "./api";

export async function fetchSearchData(searchContent: string, pgNo: number) {
  try {
    const res = await api.get(
      `/api/v1/group/search?searchContent=${searchContent}&pgNo=${pgNo}`
      // {
      //   headers: {
      //     Authorization: `Bearer ${localStorage.getItem("token")}`,
      //   },
      // }
    );
    console.log(res.data);
    if (res.status === 200) {
      return res.data;
    }

    throw new Error("unexpected res status: " + res.status);
  } catch (error) {
    console.log("search get data err: " + error);
  }
}

export async function putGroupApply(group_id: number, status: string) {
  try {
    const res = await api.put(
      `/api/v1/group/${group_id}/apply/${status}`
      // {
      //   headers: {
      //     Authorization: `Bearer ${localStorage.getItem("token")}`,
      //   },
      // }
    );
    if (res.status === 200) {
      console.log(res.data);
      return res.data;
    }
    throw new Error();
  } catch (error) {
    console.log("put group data error");
  }
}

import postApi from "../api/postApi";

export const getPosts = async () => {
	try {
		const { data } = await postApi.getAll({
      _page: 1,
      _limit: 10,
      _sort: 'updatedAt',
      _order: 'desc',
    });

		return data;
	} catch (error) {
		console.log("Failed to fetch post list", error);
	}
};

export const getPostIds = async () => {
	const posts = await getPosts();

  return posts.map(post => ({
    params: {
      id:  `${post.id}`
    }
  }))
};

export const getPostById = async (id) => {
	try {
    const res = await postApi.get(id);
    console.log(res)
    return res;
  } catch (error) {
    console.log('Failed to get post by id',error)
  }
};
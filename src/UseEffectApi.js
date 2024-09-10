import React, { useEffect, useState } from 'react';

function UseEffectApi() {
    const [data, setData] = useState({});
    

    useEffect(() => {
        fetch("https://api.github.com/users/hacktivist123")
            .then(response => {
                if (!response.ok) {
                    throw new Error("Request failed");
                }
                return response.json();
            })
            .then(ans => {
                console.log(ans, 'API Response');
                setData(ans);
            })
            .catch(error => {
                console.log(error, 'Error');
            });
    }, []);

    return (
        <div className="bg-gray-100 min-h-screen flex items-center justify-center">
            <div className="max-w-md mx-auto p-6 bg-white rounded-xl shadow-md space-y-4">
                {data && (
                    <>
                        <div className="flex items-center space-x-4">
                            <img
                                className="h-16 w-16 rounded-full"
                                src={data.avatar_url}
                                alt="Avatar"
                            />
                            <div>
                                <h1 className="text-xl font-bold text-gray-800">
                                    {data.login}
                                </h1>
                                {data.bio && (
                                    <p className="text-sm text-gray-500">
                                        {data.bio}
                                    </p>
                                )}
                                {data.location && (
                                    <p className="text-sm text-gray-500">
                                        Location: {data.location}
                                    </p>
                                )}
                            </div>
                        </div>

                        <div className="space-y-2">
                            {data.html_url && (
                                <a
                                    href={data.html_url}
                                    className="block text-blue-600 hover:underline"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    GitHub Profile
                                </a>
                            )}
                            {data.blog && (
                                <a
                                    href={data.blog}
                                    className="block text-blue-600 hover:underline"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Blog: {data.blog}
                                </a>
                            )}
                            {data.twitter_username && (
                                <a
                                    href={`https://twitter.com/${data.twitter_username}`}
                                    className="block text-blue-600 hover:underline"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Twitter: @{data.twitter_username}
                                </a>
                            )}
                        </div>

                        <div className="grid grid-cols-2 gap-4 text-sm text-gray-600">
                            <div>Followers: <span className="font-bold">{data.followers}</span></div>
                            <div>Following: <span className="font-bold">{data.following}</span></div>
                            <div>Public Repos: <span className="font-bold">{data.public_repos}</span></div>
                            <div>Public Gists: <span className="font-bold">{data.public_gists}</span></div>
                        </div>

                        <p className="text-xs text-gray-400">
                            Profile created on: {new Date(data.created_at).toLocaleDateString()}
                        </p>
                        <p className="text-xs text-gray-400">
                            Last updated: {new Date(data.updated_at).toLocaleDateString()}
                        </p>
                    </>
                )}
            </div>
        </div>
    );
}

export default UseEffectApi;

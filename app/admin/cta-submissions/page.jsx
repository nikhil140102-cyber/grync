"use client";

import { useState } from "react";
import styles from "./AdminSubmissions.module.css";

const AdminSubmissionsPage = () => {
	const [password, setPassword] = useState("");
	const [status, setStatus] = useState("idle"); // idle | loading | error | success
	const [errorMsg, setErrorMsg] = useState("");
	const [submissions, setSubmissions] = useState([]);

	const loadSubmissions = async (e) => {
		e.preventDefault();

		if (!password) {
			setErrorMsg("Enter the admin password.");
			return;
		}

		setStatus("loading");
		setErrorMsg("");

		try {
			const res = await fetch("/api/book-demo", {
				method: "GET",
				headers: { "x-admin-password": password },
			});

			const data = await res.json().catch(() => ({}));

			if (!res.ok) {
				setErrorMsg(data.error || "Something went wrong.");
				setStatus("error");
				return;
			}

			setSubmissions(data.submissions || []);
			setStatus("success");
		} catch (err) {
			setErrorMsg("Something went wrong. Please try again.");
			setStatus("error");
		}
	};

	const isUnlocked = status === "success";

	return (
		<div className={styles.page}>
			<div className={styles.container}>
				<h1 className={styles.heading}>Demo request submissions</h1>

				{!isUnlocked && (
					<form className={styles.gateForm} onSubmit={loadSubmissions}>
						<label htmlFor="admin-password">Admin password</label>
						<input
							id="admin-password"
							type="password"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							placeholder="Enter password"
							autoFocus
						/>
						{errorMsg && <span className={styles.errorText}>{errorMsg}</span>}
						<button type="submit" disabled={status === "loading"}>
							{status === "loading" ? "Checking…" : "View submissions"}
						</button>
					</form>
				)}

				{isUnlocked && (
					<>
						<div className={styles.toolbar}>
							<span className={styles.count}>
								{submissions.length} submission
								{submissions.length === 1 ? "" : "s"}
							</span>
							<button
								type="button"
								className={styles.refreshBtn}
								onClick={loadSubmissions}
							>
								Refresh
							</button>
						</div>

						<div className={styles.tableScroll}>
							<table className={styles.table}>
								<thead>
									<tr>
										<th>Date</th>
										<th>Name</th>
										<th>Email</th>
										<th>Company</th>
										<th>Designation</th>
										<th>Systems</th>
									</tr>
								</thead>
								<tbody>
									{submissions.length === 0 ? (
										<tr>
											<td colSpan={6} className={styles.emptyRow}>
												No submissions yet.
											</td>
										</tr>
									) : (
										submissions.map((s, i) => (
											<tr key={i}>
												<td>
													{s.timestamp
														? new Date(s.timestamp).toLocaleString()
														: "\u2014"}
												</td>
												<td>{s.name}</td>
												<td>{s.email}</td>
												<td>{s.company}</td>
												<td>{s.designation}</td>
												<td>{s.systems || "\u2014"}</td>
											</tr>
										))
									)}
								</tbody>
							</table>
						</div>
					</>
				)}
			</div>
		</div>
	);
};

export default AdminSubmissionsPage;
INSERT INTO users (username, password, admin) values ('admin', 'a665a45920422f9d417e4867efdc4fb8a04a1f3fff1fa07e998e86f7f7a27ae3', true);
INSERT INTO users (username, password, admin) values ('einar', 'e837ee4005e6413e569afe0a7f02942f86f012fbdb958160647be965f43663e8', false);
INSERT INTO users (username, password, admin) values ('eidur', 'dedaa6b3f5eb37ef091d0108b787f9628afc41765ed955717274251b23f1749e', false);
INSERT INTO users (username, password, admin) values ('oli', '9b532be1699ed11f669adf8b8273fc4674baf6ea18692bce7e2e6cb76409bef3', false);
INSERT INTO users (username, password, admin) values ('jolasveinninn', '39a618f7d418f492366d9a6345e1ba9da524158fb2f1daafceacdb90f2b113a13', false);

INSERT INTO tokens (token) values ('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoxLCJpYXQiOjE3MTA1MzQ0MjEsImV4cCI6MTcxMDUzODAyMX0.dDQJfIBbK8S9hDOP007w-CfRQHPLHvez7ID8lEKYM3s');
INSERT INTO tokens (token) values ('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoxLCJpYXQiOjE3MTA1MzQ0ODgsImV4cCI6MTcxMDUzODA4OH0.xP0_TgBzyPvyRg603hl1BquSex0lnK-F5rqliLjBTaM');
INSERT INTO tokens (token) values ('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoxLCJpYXQiOjE3MTA1MzQ1MDMsImV4cCI6MTcxMDUzODEwM30.9LcGrYU7LRcwS2IeZWIxuJM_rFBi0cBzt2UxLAxnVpU');
INSERT INTO tokens (token) values ('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoxLCJpYXQiOjE3MTA1MzQ1MTcsImV4cCI6MTcxMDUzODExN30._nkO-CenEtqz1ZW94FUuHN_tEOpf3vipgaL3KJAt4cw');
INSERT INTO tokens (token) values ('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoyLCJpYXQiOjE3MTA1MzQ1NDcsImV4cCI6MTcxMDUzODE0N30.AxQOjHPNFvKNDqN3dZ_-sP_kuSJ3BZsvwDqrqDayzKA');
INSERT INTO tokens (token) values ('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoyLCJpYXQiOjE3MTA1MzQ1NzQsImV4cCI6MTcxMDUzODE3NH0.JFxTOVZPh8sZ3rQEw0uoBSCP7KeQiSPGLSzWYh4OzjQ');
INSERT INTO tokens (token) values ('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjozLCJpYXQiOjE3MTA1MzQ2MTMsImV4cCI6MTcxMDUzODIxM30.3-MjvQSHXELDh5-KfgtnMjcw9tpQ5illGSMchrn7NSQ');
INSERT INTO tokens (token) values ('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjo0LCJpYXQiOjE3MTA1MzQ2MzUsImV4cCI6MTcxMDUzODIzNX0._ZhWRilDe4QtpGlF0B1fWt2VfCTpnERg5W4BsEdtmhU');
INSERT INTO tokens (token) values ('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjo0LCJpYXQiOjE3MTA1MzQ2NzcsImV4cCI6MTcxMDUzODI3N30.utxgtNcxSZwIXTgPWbMMKsCAZxOOUvt3BfVRkuNT90c');
INSERT INTO tokens (token) values ('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjo0LCJpYXQiOjE3MTA1MzQ2OTMsImV4cCI6MTcxMDUzODI5M30.P-kD5LxgRPZUWypdz1mIxOKEdvUQ7TgpIK264IYGBuE');

INSERT INTO tasks (title, description, user_id) values ('Klára verkefnið', 'Það er mikilvægt að klára verkefnið', 1);
INSERT INTO tasks (title, description, user_id) values ('Klára verkefnið2', 'Það er mikilvægt að klára verkefnið', 1);
INSERT INTO tasks (title, description, user_id) values ('Walk the dog', NULL, 2);
INSERT INTO tasks (title, description, user_id) values ('Bursta', 'Það er mikilvægt að klára verkefnið', 3);
INSERT INTO tasks (title, description, user_id) values ('Forrita', NULL, 1);